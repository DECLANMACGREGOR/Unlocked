import SwiftUI

struct HoursInputView: View {
    @Binding var inputText: String
    @Binding var selectedPeriod: TimePeriod
    let onCalculate: () -> Void

    var body: some View {
        VStack(spacing: 24) {
            // Header
            VStack(spacing: 6) {
                Text("How much screen time?")
                    .font(.title2)
                    .fontWeight(.bold)
                    .multilineTextAlignment(.center)

                Text("Check Settings → Screen Time on your iPhone")
                    .font(.subheadline)
                    .foregroundStyle(.secondary)
                    .multilineTextAlignment(.center)
            }

            // Large hour input
            HStack(alignment: .firstTextBaseline, spacing: 4) {
                TextField("0", text: $inputText)
                    .keyboardType(.decimalPad)
                    .font(.system(size: 72, weight: .bold, design: .rounded))
                    .multilineTextAlignment(.center)
                    .frame(maxWidth: 200)

                Text("hrs")
                    .font(.title)
                    .fontWeight(.medium)
                    .foregroundStyle(.secondary)
            }

            // Period picker
            Picker("Period", selection: $selectedPeriod) {
                ForEach(TimePeriod.allCases, id: \.self) { period in
                    Text(period.displayName).tag(period)
                }
            }
            .pickerStyle(.segmented)

            // Calculate button
            Button(action: onCalculate) {
                Text("What could I have learned?")
                    .font(.headline)
                    .foregroundStyle(.white)
                    .frame(maxWidth: .infinity)
                    .padding(.vertical, 16)
                    .background(Color.accentColor, in: RoundedRectangle(cornerRadius: AppSizing.cornerRadius))
            }
        }
        .padding(AppSizing.cardPadding)
    }
}
