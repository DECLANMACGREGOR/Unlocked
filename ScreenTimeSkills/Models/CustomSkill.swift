import Foundation
import SwiftData

@Model
final class CustomSkill: Identifiable {
    var id: UUID
    var name: String
    var estimatedHours: Double
    var categoryRaw: String
    var createdAt: Date

    init(name: String, estimatedHours: Double, category: Category) {
        self.id = UUID()
        self.name = name
        self.estimatedHours = estimatedHours
        self.categoryRaw = category.rawValue
        self.createdAt = Date()
    }

    var category: Category {
        Category(rawValue: categoryRaw) ?? .creative
    }

    func toSkill() -> Skill {
        Skill(
            id: id,
            name: name,
            estimatedHours: estimatedHours,
            category: category,
            source: .custom
        )
    }
}
