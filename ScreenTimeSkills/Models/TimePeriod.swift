import Foundation

enum TimePeriod: String, CaseIterable, Equatable, Hashable {
    case today     = "today"
    case thisWeek  = "thisWeek"
    case thisMonth = "thisMonth"
    case custom    = "custom"

    var displayName: String {
        switch self {
        case .today:     return "Today"
        case .thisWeek:  return "This Week"
        case .thisMonth: return "This Month"
        case .custom:    return "Custom"
        }
    }

    static func from(_ raw: String) -> TimePeriod {
        TimePeriod(rawValue: raw) ?? .custom
    }
}
