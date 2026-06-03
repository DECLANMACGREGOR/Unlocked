import SwiftUI

struct EditCustomSkillView: View {
    let skill: CustomSkill
    let onSave: (String, Double, Category) -> Void

    @Environment(\.dismiss) private var dismiss
    @State private var name: String
    @State private var hoursText: String
    @State private var category: Category

    init(skill: CustomSkill, onSave: @escaping (String, Double, Category) -> Void) {
        self.skill = skill
        self.onSave = onSave
        _name = State(initialValue: skill.name)
        _hoursText = State(initialValue: String(skill.estimatedHours.formatted(.number.precision(.fractionLength(0)))))
        _category = State(initialValue: skill.category)
    }

    private var hours: Double { Double(hoursText) ?? 0 }

    private var isValid: Bool {
        !name.trimmingCharacters(in: .whitespaces).isEmpty && hours > 0
    }

    var body: some View {
        NavigationStack {
            Form {
                Section("Skill Details") {
                    TextField("Skill name", text: $name)

                    HStack {
                        Text("Hours to learn")
                        Spacer()
                        TextField("e.g. 40", text: $hoursText)
                            .keyboardType(.decimalPad)
                            .multilineTextAlignment(.trailing)
                    }

                    Picker("Category", selection: $category) {
                        ForEach(Category.allCases, id: \.self) { cat in
                            Label(cat.rawValue, systemImage: cat.icon).tag(cat)
                        }
                    }
                }
            }
            .navigationTitle("Edit Skill")
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
