import SwiftUI

struct CategoryBadgeView: View {
    let category: Category

    var body: some View {
        Text(category.rawValue)
            .font(.caption2)
            .fontWeight(.semibold)
            .foregroundStyle(.white)
            .padding(.horizontal, 8)
            .padding(.vertical, 3)
            .background(category.color, in: Capsule())
    }
}
