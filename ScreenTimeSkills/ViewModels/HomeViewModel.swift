import SwiftUI
import SwiftData

@Observable
final class HomeViewModel {
    var inputText: String = ""
    var inputHours: Double = 0
    var selectedPeriod: TimePeriod = .thisWeek
    var matchResult: SkillMatchResult?
    var allSkills: [Skill] = []

    func calculate() {
        inputHours = Double(inputText) ?? 0
        matchResult = SkillMatchingService.match(hours: inputHours, skills: allSkills)
    }

    func saveEntry(context: ModelContext) {
        guard inputHours > 0 else { return }
        let entry = ScreenTimeEntry(hours: inputHours, period: selectedPeriod)
        context.insert(entry)
        try? context.save()
    }
}
