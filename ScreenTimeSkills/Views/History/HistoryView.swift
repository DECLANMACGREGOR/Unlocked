import SwiftUI
import SwiftData

struct HistoryView: View {
    @Environment(\.modelContext) private var modelContext
    @Query(sort: \ScreenTimeEntry.recordedAt, order: .reverse) private var entries: [ScreenTimeEntry]

    @State private var historyVM = HistoryViewModel()

    var body: some View {
        NavigationStack {
            Group {
                if entries.isEmpty {
                    EmptyStateView(
                        systemImage: "clock.arrow.circlepath",
                        title: "No history yet",
                        message: "Enter your screen time on the Home tab to start tracking."
                    )
                } else {
                    entriesList
                }
            }
            .navigationTitle("History")
        }
    }

    private var entriesList: some View {
        List {
            ForEach(historyVM.groupedEntries(entries), id: \.key) { group in
                Section(group.key) {
                    ForEach(group.entries, id: \.id) { entry in
                        HistoryEntryRow(entry: entry)
                            .swipeActions(edge: .trailing, allowsFullSwipe: true) {
                                Button(role: .destructive) {
                                    historyVM.deleteEntry(entry, context: modelContext)
                                } label: {
                                    Label("Delete", systemImage: "trash")
                                }
                            }
                    }
                }
            }
        }
        .listStyle(.insetGrouped)
    }
}

// MARK: - HistoryEntryRow

private struct HistoryEntryRow: View {
    let entry: ScreenTimeEntry

    var body: some View {
        HStack {
            VStack(alignment: .leading, spacing: 3) {
                Text("\(entry.hours.formatted(.number.precision(.fractionLength(0...1)))) hours")
                    .font(.subheadline)
                    .fontWeight(.semibold)
                Text(entry.timePeriod.displayName)
                    .font(.caption)
                    .foregroundStyle(.secondary)
            }

            Spacer()

            Text(entry.recordedAt.formatted(.relative(presentation: .named)))
                .font(.caption)
                .foregroundStyle(.secondary)
        }
    }
}
