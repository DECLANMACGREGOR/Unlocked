import SwiftUI

// MARK: - SkillResultsView

struct SkillResultsView: View {
    let result: SkillMatchResult

    var body: some View {
        VStack(alignment: .leading, spacing: AppSizing.sectionSpacing) {
            if !result.completable.isEmpty {
                completableSection
            }

            if !result.combinations.isEmpty {
                combinationsSection
            }

            if !result.almostThere.isEmpty {
                almostThereSection
            }

            if !result.hasResults {
                noResultsView
            }
        }
        .padding(.horizontal, AppSizing.cardPadding)
    }

    // MARK: - Sections

    private var completableSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            ResultSectionHeader(
                title: "You could have learned",
                subtitle: "\(result.completable.count) skill\(result.completable.count == 1 ? "" : "s") fully completable"
            )

            ScrollView(.horizontal, showsIndicators: false) {
                LazyHStack(spacing: 12) {
                    ForEach(result.completable) { skill in
                        SkillCardView(skill: skill, inputHours: result.totalInputHours)
                    }
                }
                .padding(.horizontal, AppSizing.cardPadding)
                .padding(.vertical, 4)
            }
            .padding(.horizontal, -AppSizing.cardPadding)
        }
    }

    private var combinationsSection: some View {
        VStack(alignment: .leading, spacing: 12) {
            ResultSectionHeader(
                title: "Great combinations",
                subtitle: "Skills that fill your time well"
            )

            ForEach(Array(result.combinations.enumerated()), id: \.offset) { _, combo in
                CombinationCardView(skills: combo, totalHours: result.totalInputHours)
            }
        }
    }

    private var almostThereSection: some View {
        VStack(alignment: .leading, spacing: 10) {
            ResultSectionHeader(
                title: "Almost there",
                subtitle: "Just a bit more screen time and you'd have these"
            )

            ForEach(result.almostThere) { skill in
                AlmostThereRowView(skill: skill, inputHours: result.totalInputHours)
            }
        }
    }

    private var noResultsView: some View {
        VStack(spacing: 12) {
            Image(systemName: "lightbulb")
                .font(.system(size: 44))
                .foregroundStyle(.secondary)
            Text("Not enough hours yet")
                .font(.headline)
            Text("Even small amounts of screen time add up. Keep tracking!")
                .font(.subheadline)
                .foregroundStyle(.secondary)
                .multilineTextAlignment(.center)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 40)
    }
}

// MARK: - ResultSectionHeader

private struct ResultSectionHeader: View {
    let title: String
    let subtitle: String

    var body: some View {
        VStack(alignment: .leading, spacing: 2) {
            Text(title)
                .font(.headline)
            Text(subtitle)
                .font(.caption)
                .foregroundStyle(.secondary)
        }
    }
}

// MARK: - CombinationCardView

private struct CombinationCardView: View {
    let skills: [Skill]
    let totalHours: Double

    private var usedHours: Double {
        skills.reduce(0) { $0 + $1.estimatedHours }
    }

    private var efficiency: Double {
        guard totalHours > 0 else { return 0 }
        return min(usedHours / totalHours, 1.0)
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            ForEach(skills) { skill in
                HStack(spacing: 10) {
                    Image(systemName: skill.category.icon)
                        .foregroundStyle(skill.category.color)
                        .frame(width: 18)
                    Text(skill.name)
                        .font(.subheadline)
                    Spacer()
                    Text("\(skill.estimatedHours.formatted(.number.precision(.fractionLength(0)))) hrs")
                        .font(.caption)
                        .foregroundStyle(.secondary)
                }
            }

            Divider()

            HStack {
                Text("\(usedHours.formatted(.number.precision(.fractionLength(0)))) / \(totalHours.formatted(.number.precision(.fractionLength(0)))) hrs used")
                    .font(.caption)
                    .foregroundStyle(.secondary)
                Spacer()
                Text("\(Int(efficiency * 100))%")
                    .font(.caption)
                    .fontWeight(.semibold)
                    .foregroundStyle(efficiency >= 0.8 ? .green : Color.accentColor)
            }

            ProgressView(value: efficiency)
                .tint(efficiency >= 0.8 ? .green : .accentColor)
        }
        .padding(AppSizing.cardPadding)
        .background(
            Color(uiColor: .secondarySystemBackground),
            in: RoundedRectangle(cornerRadius: AppSizing.cornerRadius)
        )
    }
}

// MARK: - AlmostThereRowView

private struct AlmostThereRowView: View {
    let skill: Skill
    let inputHours: Double

    private var hoursNeeded: Double {
        skill.estimatedHours - inputHours
    }

    private var progress: Double {
        guard skill.estimatedHours > 0 else { return 0 }
        return inputHours / skill.estimatedHours
    }

    var body: some View {
        HStack(spacing: 12) {
            ProgressArcView(progress: progress, size: 40)

            VStack(alignment: .leading, spacing: 2) {
                Text(skill.name)
                    .font(.subheadline)
                    .fontWeight(.medium)
                Text("\(hoursNeeded.formatted(.number.precision(.fractionLength(0...1)))) more hours needed")
                    .font(.caption)
                    .foregroundStyle(.secondary)
            }

            Spacer()

            CategoryBadgeView(category: skill.category)
        }
        .padding(AppSizing.cardPadding)
        .background(
            Color(uiColor: .secondarySystemBackground),
            in: RoundedRectangle(cornerRadius: AppSizing.cornerRadius)
        )
    }
}
