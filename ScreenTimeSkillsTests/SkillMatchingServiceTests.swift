import XCTest
@testable import ScreenTimeSkills

final class SkillMatchingServiceTests: XCTestCase {

    // Shared skill pool for all tests
    private let skills = SkillLibrary.all

    // MARK: - Completable

    func testCompletable_40hours() {
        let result = SkillMatchingService.match(hours: 40, skills: skills)
        // Python Basics (40h), HTML & CSS (30h), Yoga (15h), Meditation (10h),
        // Cook 10 dishes (20h), Photography (25h), Knitting (20h) all fit
        XCTAssertTrue(result.completable.contains { $0.name == "Python Basics" })
        XCTAssertTrue(result.completable.contains { $0.name == "HTML & CSS Basics" })
        XCTAssertTrue(result.completable.contains { $0.name == "Learn Meditation" })
        // Basic Guitar (50h) should NOT be completable at 40h
        XCTAssertFalse(result.completable.contains { $0.name == "Basic Guitar" })
    }

    func testCompletable_sortedDescending() {
        let result = SkillMatchingService.match(hours: 60, skills: skills)
        // Completable results should be sorted largest-first
        for i in 0..<(result.completable.count - 1) {
            XCTAssertGreaterThanOrEqual(
                result.completable[i].estimatedHours,
                result.completable[i + 1].estimatedHours
            )
        }
    }

    // MARK: - Almost There

    func testAlmostThere_guitarAt45hours() {
        // Guitar is 50h. 45 * 1.20 = 54h. 50 <= 54 → should appear.
        let result = SkillMatchingService.match(hours: 45, skills: skills)
        XCTAssertTrue(result.almostThere.contains { $0.name == "Basic Guitar" })
    }

    func testAlmostThere_excludesFarSkills() {
        // Piano is 100h. 45 * 1.20 = 54h. 100 > 54 → should NOT appear.
        let result = SkillMatchingService.match(hours: 45, skills: skills)
        XCTAssertFalse(result.almostThere.contains { $0.name == "Basic Piano" })
    }

    func testAlmostThere_maxThreeResults() {
        let result = SkillMatchingService.match(hours: 45, skills: skills)
        XCTAssertLessThanOrEqual(result.almostThere.count, 3)
    }

    // MARK: - Combinations

    func testCombinations_twoSkillCombo() {
        let result = SkillMatchingService.match(hours: 60, skills: skills)
        XCTAssertFalse(result.combinations.isEmpty)
        XCTAssertTrue(result.combinations.contains { $0.count >= 2 })
    }

    func testCombinations_threeSkillCombo() {
        // At 80h there are enough skills to form a 3-skill combo
        let result = SkillMatchingService.match(hours: 80, skills: skills)
        XCTAssertTrue(result.combinations.contains { $0.count >= 3 })
    }

    // MARK: - Edge Cases

    func testZeroHours_allEmpty() {
        let result = SkillMatchingService.match(hours: 0, skills: skills)
        XCTAssertTrue(result.completable.isEmpty)
        XCTAssertTrue(result.almostThere.isEmpty)
        XCTAssertTrue(result.combinations.isEmpty)
        XCTAssertFalse(result.hasResults)
    }

    func testExactMatch_inCompletableNotAlmostThere() {
        // Python Basics is exactly 40h — should be completable, NOT almostThere
        let result = SkillMatchingService.match(hours: 40, skills: skills)
        XCTAssertTrue(result.completable.contains { $0.name == "Python Basics" })
        XCTAssertFalse(result.almostThere.contains { $0.name == "Python Basics" })
    }

    func testEmptySkillPool() {
        let result = SkillMatchingService.match(hours: 100, skills: [])
        XCTAssertTrue(result.completable.isEmpty)
        XCTAssertTrue(result.combinations.isEmpty)
        XCTAssertTrue(result.almostThere.isEmpty)
    }
}
