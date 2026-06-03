import Foundation

enum SkillMatchingService {

    // MARK: - Public

    static func match(hours: Double, skills: [Skill]) -> SkillMatchResult {
        guard hours > 0 else { return .empty }

        let completable = skills
            .filter { $0.estimatedHours <= hours }
            .sorted { $0.estimatedHours > $1.estimatedHours }

        let threshold = hours * 1.20
        let almostThere = Array(
            skills
                .filter { $0.estimatedHours > hours && $0.estimatedHours <= threshold }
                .sorted { $0.estimatedHours < $1.estimatedHours }
                .prefix(3)
        )

        var rawCombos: [[Skill]] = []

        let twoSkill = greedyCombination(pool: completable, budget: hours, count: 2)
        if twoSkill.count >= 2 { rawCombos.append(twoSkill) }

        let threeSkill = greedyCombination(pool: completable, budget: hours, count: 3)
        if threeSkill.count >= 2 { rawCombos.append(threeSkill) }

        let combinations = deduplicateCombinations(rawCombos)

        return SkillMatchResult(
            completable: completable,
            combinations: combinations,
            almostThere: almostThere,
            totalInputHours: hours
        )
    }

    // MARK: - Private

    private static func greedyCombination(pool: [Skill], budget: Double, count: Int) -> [Skill] {
        let sorted = pool.sorted { $0.estimatedHours > $1.estimatedHours }
        var result: [Skill] = []
        var budgetLeft = budget

        for skill in sorted {
            if result.count >= count { break }
            if skill.estimatedHours <= budgetLeft && !result.contains(skill) {
                result.append(skill)
                budgetLeft -= skill.estimatedHours
            }
        }

        return result
    }

    /// Remove any combination whose skill set is a subset of another combination in the list.
    private static func deduplicateCombinations(_ combos: [[Skill]]) -> [[Skill]] {
        var result: [[Skill]] = []
        for combo in combos {
            let comboIDs = Set(combo.map { $0.id })
            let isSubset = result.contains { existing in
                let existingIDs = Set(existing.map { $0.id })
                return comboIDs.isSubset(of: existingIDs)
            }
            if !isSubset {
                result.append(combo)
            }
        }
        return result
    }
}
