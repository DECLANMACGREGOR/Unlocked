import SwiftUI
import SwiftData

@main
struct UnlockedApp: App {
    var body: some Scene {
        WindowGroup {
            TabView {
                HomeView()
                    .tabItem {
                        Label("Home", systemImage: "house.fill")
                    }

                SkillLibraryView()
                    .tabItem {
                        Label("Library", systemImage: "books.vertical.fill")
                    }

                HistoryView()
                    .tabItem {
                        Label("History", systemImage: "clock.fill")
                    }
            }
        }
        .modelContainer(for: [CustomSkill.self, ScreenTimeEntry.self])
    }
}
