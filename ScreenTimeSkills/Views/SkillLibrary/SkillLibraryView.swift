import SwiftUI
import SwiftData

struct SkillLibraryView: View {
    @Environment(\.modelContext) private var modelContext
    @Query(sort: \CustomSkill.createdAt) private var customSkills: [CustomSkill]

    @State private var libraryVM = SkillLibraryViewModel()
    @State private var showAddSkill = false
    @State private var skillToEdit: CustomSkill?

    private var groupedSkills: [(category: Category, skills: [Skill])] {
        let merged = libraryVM.mergedSkills(customSkills: customSkills)
        return Category.allCases.compactMap { category in
            let skills = merged.filter { $0.category == category }
            return skills.isEmpty ? nil : (category: category, skills: skills)
        }
    }

    var body: some View {
        NavigationStack {
            List {
                // Category filter chips
                Section {
                    categoryFilterRow
                        .listRowInsets(EdgeInsets(top: 8, leading: 16, bottom: 8, trailing: 16))
                        .listRowBackground(Color.clear)
                        .listRowSeparator(.hidden)
                }

                if groupedSkills.isEmpty {
                    emptyState
                } else {
                    ForEach(groupedSkills, id: \.category) { group in
                        Section {
                            ForEach(group.skills) { skill in
                                SkillRowView(skill: skill) {
                                    skillToEdit = customSkills.first { $0.id == skill.id }
                                }
                                .swipeActions(edge: .trailing, allowsFullSwipe: true) {
                                    if skill.source == .custom,
                                       let custom = customSkills.first(where: { $0.id == skill.id }) {
                                        Button(role: .destructive) {
                                            libraryVM.deleteSkill(custom, context: modelContext)
                                        } label: {
                                            Label("Delete", systemImage: "trash")
                                        }
                                    }
                                }
                            }
                        } header: {
                            Label(group.category.rawValue, systemImage: group.category.icon)
                        }
                    }
                }
            }
            .listStyle(.insetGrouped)
            .navigationTitle("Skill Library")
            .searchable(text: $libraryVM.searchText, prompt: "Search skills")
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button { showAddSkill = true } label: {
                        Image(systemName: "plus")
                    }
                }
            }
            .sheet(isPresented: $showAddSkill) {
                AddCustomSkillView { name, hours, category in
                    libraryVM.addSkill(name: name, hours: hours, category: category, context: modelContext)
                }
            }
            .sheet(item: $skillToEdit) { skill in
                EditCustomSkillView(skill: skill) { name, hours, category in
                    libraryVM.updateSkill(skill, name: name, hours: hours, category: category)
                }
            }
        }
    }

    // MARK: - Subviews

    private var categoryFilterRow: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 8) {
                FilterChip(label: "All", isSelected: libraryVM.selectedCategory == nil) {
                    libraryVM.selectedCategory = nil
                }
                ForEach(Category.allCases, id: \.self) { category in
                    FilterChip(
                        label: category.rawValue,
                        isSelected: libraryVM.selectedCategory == category,
                        color: category.color
                    ) {
                        libraryVM.selectedCategory = (libraryVM.selectedCategory == category) ? nil : category
                    }
                }
            }
        }
    }

    private var emptyState: some View {
        VStack(spacing: 12) {
            Image(systemName: "magnifyingglass")
                .font(.system(size: 44))
                .foregroundStyle(.secondary)
            Text("No skills found")
                .font(.headline)
            Text("Try adjusting your search or category filter.")
                .font(.subheadline)
                .foregroundStyle(.secondary)
                .multilineTextAlignment(.center)
        }
        .frame(maxWidth: .infinity)
        .padding(.vertical, 40)
        .listRowBackground(Color.clear)
        .listRowSeparator(.hidden)
    }
}

// MARK: - SkillRowView

private struct SkillRowView: View {
    let skill: Skill
    let onEdit: () -> Void

    var body: some View {
        HStack {
            VStack(alignment: .leading, spacing: 3) {
                HStack(spacing: 6) {
                    Text(skill.name)
                        .font(.subheadline)
                    if skill.source == .custom {
                        Text("Custom")
                            .font(.caption2)
                            .fontWeight(.semibold)
                            .foregroundStyle(.white)
                            .padding(.horizontal, 6)
                            .padding(.vertical, 2)
                            .background(Color.orange, in: Capsule())
                    }
                }
                Text("\(skill.estimatedHours.formatted(.number.precision(.fractionLength(0)))) hours")
                    .font(.caption)
                    .foregroundStyle(.secondary)
            }

            Spacer()

            if skill.source == .custom {
                Button(action: onEdit) {
                    Image(systemName: "pencil")
                        .foregroundStyle(.secondary)
                }
                .buttonStyle(.plain)
            }
        }
    }
}

// MARK: - FilterChip

private struct FilterChip: View {
    let label: String
    let isSelected: Bool
    var color: Color = .accentColor
    let action: () -> Void

    var body: some View {
        Button(action: action) {
            Text(label)
                .font(.caption)
                .fontWeight(.medium)
                .foregroundStyle(isSelected ? .white : .primary)
                .padding(.horizontal, 12)
                .padding(.vertical, 6)
                .background(
                    isSelected ? color : Color(uiColor: .tertiarySystemFill),
                    in: Capsule()
                )
        }
        .buttonStyle(.plain)
        .animation(.spring(duration: 0.2), value: isSelected)
    }
}
