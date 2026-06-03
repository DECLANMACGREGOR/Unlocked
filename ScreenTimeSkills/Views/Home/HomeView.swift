import SwiftUI
import SwiftData

struct HomeView: View {
    @Environment(\.modelContext) private var modelContext
    @Query private var customSkills: [CustomSkill]

    @State private var homeVM = HomeViewModel()

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: AppSizing.sectionSpacing) {
                    HoursInputView(
                        inputText: $homeVM.inputText,
                        selectedPeriod: $homeVM.selectedPeriod,
                        onCalculate: handleCalculate
                    )

                    if let result = homeVM.matchResult {
                        SkillResultsView(result: result)
                            .transition(.opacity.combined(with: .move(edge: .bottom)))
                    }
                }
                .padding(.bottom, AppSizing.sectionSpacing)
            }
            .navigationTitle("Unlocked")
            .navigationBarTitleDisplayMode(.large)
            .scrollDismissesKeyboard(.immediately)
            .onAppear { syncSkills() }
            .onChange(of: customSkills) { _, _ in syncSkills() }
        }
    }

    // MARK: - Private

    private func handleCalculate() {
        withAnimation(.spring(duration: 0.4)) {
            homeVM.calculate()
        }
        homeVM.saveEntry(context: modelContext)
        UIImpactFeedbackGenerator(style: .medium).impactOccurred()
    }

    private func syncSkills() {
        homeVM.allSkills = SkillLibrary.all + customSkills.map { $0.toSkill() }
    }
}
