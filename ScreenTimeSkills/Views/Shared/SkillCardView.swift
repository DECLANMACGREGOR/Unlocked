import SwiftUI

struct SkillCardView: View {
    let skill: Skill
    let inputHours: Double

    private var progress: Double {
        guard skill.estimatedHours > 0 else { return 0 }
        return inputHours / skill.estimatedHours
    }

    private var isCompleted: Bool {
        inputHours >= skill.estimatedHours
    }

    private var statusText: String {
        if isCompleted {
            return "Completed ✓"
        }
        let remaining = skill.estimatedHours - inputHours
        return "\(remaining.formatted(.number.precision(.fractionLength(0...1)))) hrs away"
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack {
                ProgressArcView(progress: progress)
                Spacer()
                CategoryBadgeView(category: skill.category)
            }

            Text(skill.name)
                .font(.subheadline)
                .fontWeight(.semibold)
                .lineLimit(2)
                .fixedSize(horizontal: false, vertical: true)

            HStack {
                Text("\(skill.estimatedHours.formatted(.number.precision(.fractionLength(0)))) hrs total")
                    .font(.caption)
                    .foregroundStyle(.secondary)
                Spacer()
            }

            Text(statusText)
                .font(.caption)
                .fontWeight(.medium)
                .foregroundStyle(isCompleted ? .green : .secondary)
        }
        .padding(AppSizing.cardPadding)
        .frame(width: 160, alignment: .leading)
        .background(
            Color(uiColor: .secondarySystemBackground),
            in: RoundedRectangle(cornerRadius: AppSizing.cornerRadius)
        )
    }
}
