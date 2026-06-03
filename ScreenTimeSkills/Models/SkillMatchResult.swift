import Foundation

struct SkillMatchResult {
    let completable: [Skill]
    let combinations: [[Skill]]
    let almostThere: [Skill]
    let totalInputHours: Double

    var hasResults: Bool {
        !completable.isEmpty || !almostThere.isEmpty
    }

    static let empty = SkillMatchResult(
        completable: [],
        combinations: [],
        almostThere: [],
        totalInputHours: 0
    )
}
