import SwiftUI

enum AppColors {
    // Swap these for named Assets.xcassets color sets in Phase 8
    // Modern cream / muted palette
    static let languages   = Color(red: 0.68, green: 0.56, blue: 0.45) // warm tan
    static let instruments = Color(red: 0.82, green: 0.72, blue: 0.60) // light cream
    static let coding      = Color(red: 0.56, green: 0.50, blue: 0.44) // muted taupe
    static let fitness     = Color(red: 0.78, green: 0.68, blue: 0.60) // soft beige
    static let creative    = Color(red: 0.86, green: 0.80, blue: 0.72) // pale cream
}

enum AppSizing {
    static let cornerRadius: CGFloat = 14
    static let cardPadding:  CGFloat = 16
    static let sectionSpacing: CGFloat = 28
}
