import SwiftUI

// MARK: - Category

enum Category: String, CaseIterable, Codable, Hashable {
    case languages   = "Languages"
    case instruments = "Instruments"
    case coding      = "Coding"
    case fitness     = "Fitness"
    case creative    = "Creative"

    var color: Color {
        switch self {
        case .languages:   return AppColors.languages
        case .instruments: return AppColors.instruments
        case .coding:      return AppColors.coding
        case .fitness:     return AppColors.fitness
        case .creative:    return AppColors.creative
        }
    }

    var icon: String {
        switch self {
        case .languages:   return "bubble.left.and.bubble.right.fill"
        case .instruments: return "music.note"
        case .coding:      return "chevron.left.forwardslash.chevron.right"
        case .fitness:     return "figure.run"
        case .creative:    return "paintbrush.fill"
        }
    }
}

// MARK: - SkillSource

enum SkillSource {
    case builtIn
    case custom
}

// MARK: - Skill

struct Skill: Identifiable, Hashable {
    let id: UUID
    let name: String
    let estimatedHours: Double
    let category: Category
    let source: SkillSource

    func hash(into hasher: inout Hasher) {
        hasher.combine(id)
    }

    static func == (lhs: Skill, rhs: Skill) -> Bool {
        lhs.id == rhs.id
    }
}
