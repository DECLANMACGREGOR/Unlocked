import SwiftUI
import SwiftData

@Observable
final class SkillLibraryViewModel {
    var searchText: String = ""
    var selectedCategory: Category? = nil

    func mergedSkills(customSkills: [CustomSkill]) -> [Skill] {
        let all = SkillLibrary.all + customSkills.map { $0.toSkill() }
        return all.filter { skill in
            let matchesSearch = searchText.isEmpty ||
                skill.name.localizedCaseInsensitiveContains(searchText)
            let matchesCategory = selectedCategory == nil ||
                skill.category == selectedCategory
            return matchesSearch && matchesCategory
        }
    }

    func addSkill(name: String, hours: Double, category: Category, context: ModelContext) {
        let skill = CustomSkill(name: name, estimatedHours: hours, category: category)
        context.insert(skill)
        try? context.save()
    }

    func deleteSkill(_ skill: CustomSkill, context: ModelContext) {
        context.delete(skill)
        try? context.save()
    }

    func updateSkill(_ skill: CustomSkill, name: String, hours: Double, category: Category) {
        skill.name = name
        skill.estimatedHours = hours
        skill.categoryRaw = category.rawValue
    }
}
