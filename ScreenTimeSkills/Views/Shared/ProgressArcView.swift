import SwiftUI

struct ProgressArcView: View {
    let progress: Double    // 0.0 – 1.0+
    var lineWidth: CGFloat = 4
    var size: CGFloat = 44

    private var clampedProgress: Double {
        min(max(progress, 0), 1.0)
    }

    private var arcColor: Color {
        progress >= 1.0 ? .green : .accentColor
    }

    var body: some View {
        ZStack {
            Circle()
                .stroke(Color.secondary.opacity(0.15), lineWidth: lineWidth)

            Circle()
                .trim(from: 0, to: clampedProgress)
                .stroke(
                    arcColor,
                    style: StrokeStyle(lineWidth: lineWidth, lineCap: .round)
                )
                .rotationEffect(.degrees(-90))
                .animation(.spring(duration: 0.5), value: clampedProgress)
        }
        .frame(width: size, height: size)
    }
}
