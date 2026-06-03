import SwiftUI
import SwiftData

@Observable
final class HistoryViewModel {

    func groupedEntries(
        _ entries: [ScreenTimeEntry]
    ) -> [(key: String, entries: [ScreenTimeEntry])] {
        let formatter = DateFormatter()
        formatter.dateFormat = "MMMM yyyy"

        let groups = Dictionary(grouping: entries) { entry in
            formatter.string(from: entry.recordedAt)
        }

        return groups
            .map { (key: $0.key, entries: $0.value) }
            .sorted { lhs, rhs in
                let lDate = lhs.entries.first?.recordedAt ?? .distantPast
                let rDate = rhs.entries.first?.recordedAt ?? .distantPast
                return lDate > rDate
            }
    }

    func deleteEntry(_ entry: ScreenTimeEntry, context: ModelContext) {
        context.delete(entry)
        try? context.save()
    }
}
