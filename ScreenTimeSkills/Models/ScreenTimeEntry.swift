import Foundation
import SwiftData

@Model
final class ScreenTimeEntry {
    var id: UUID
    var hours: Double
    var periodRaw: String
    var recordedAt: Date
    var note: String?

    init(hours: Double, period: TimePeriod, note: String? = nil) {
        self.id = UUID()
        self.hours = hours
        self.periodRaw = period.rawValue
        self.recordedAt = Date()
        self.note = note
    }

    var timePeriod: TimePeriod {
        TimePeriod.from(periodRaw)
    }
}
