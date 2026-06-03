import SwiftUI

struct AddCustomSkillView: View {
    let onSave: (String, Double, Category) -> Void

    @Environment(\.dismiss) private var dismiss
    @State private var name: String = ""
    @State private var hoursText: String = ""
    @State private var category: Category = .creative

    private var hours: Double { Double(hoursText) ?? 0 }

    private var isValid: Bool {
        !name.trimmingCharacters(in: .whitespaces).isEmpty && hours > 0
    }

    var body: some View {
        NavigationStack {
            Form {
                Section("Skill Details") {
                    TextField("e.g. Bread Baking", text: $name)

                    HStack {
                        Text("Hours to learn")
                        Spacer()
                        TextField("e.g. 40", text: $hoursText)
                            .keyboardType(.decimalPad)
                            .multilineTextAlignment(.trailing)
                            .foregroundStyle(hours > 0 ? .primary : .secondary)
                    }

                    Picker("Category", selection: $category) {
                        ForEach(Category.allCases, id: \.self) { cat in
                            Label(cat.rawValue, systemImage: cat.icon).tag(cat)
                        }
                    }
                }

                Section {
                    Text("Hour estimates should reflect real practice time, not passive watching.")
                        .font(.caption)
                        .foregroundStyle(.secondary)
                }
            }
            .navigationTitle("Add Skill")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .topBarLeading) {
                    Button("Cancel") { dismiss() }
                }
                ToolbarItem(placement: .topBarTrailing) {
                    Button("Save") {
                        onSave(name.trimmingCharacters(in: .whitespaces), hours, category)
                        dismiss()
                    }
                    .fontWeight(.semibold)
                    .disabled(!isValid)
                }
            }
        }
    }
}
