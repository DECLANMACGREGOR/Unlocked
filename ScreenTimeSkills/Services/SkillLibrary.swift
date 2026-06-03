import Foundation

enum SkillLibrary {

    // Single stable array for the lifetime of the app.
    // static let ensures UUID() is called once and never changes.
    static let all: [Skill] = languages + instruments + coding + fitness + creative

    // MARK: - Languages (8)

    private static let languages: [Skill] = [
        Skill(id: UUID(), name: "Conversational Spanish",   estimatedHours: 150,  category: .languages, source: .builtIn),
        Skill(id: UUID(), name: "Conversational French",    estimatedHours: 150,  category: .languages, source: .builtIn),
        Skill(id: UUID(), name: "Conversational Portuguese",estimatedHours: 150,  category: .languages, source: .builtIn),
        Skill(id: UUID(), name: "Conversational Italian",   estimatedHours: 150,  category: .languages, source: .builtIn),
        Skill(id: UUID(), name: "Conversational German",    estimatedHours: 200,  category: .languages, source: .builtIn),
        Skill(id: UUID(), name: "Conversational Japanese",  estimatedHours: 600,  category: .languages, source: .builtIn),
        Skill(id: UUID(), name: "Conversational Mandarin",  estimatedHours: 600,  category: .languages, source: .builtIn),
        Skill(id: UUID(), name: "Conversational Korean",    estimatedHours: 480,  category: .languages, source: .builtIn),
    ]

    // MARK: - Instruments (4)

    private static let instruments: [Skill] = [
        Skill(id: UUID(), name: "Basic Guitar",  estimatedHours: 50,  category: .instruments, source: .builtIn),
        Skill(id: UUID(), name: "Basic Piano",   estimatedHours: 100, category: .instruments, source: .builtIn),
        Skill(id: UUID(), name: "Basic Ukulele", estimatedHours: 30,  category: .instruments, source: .builtIn),
        Skill(id: UUID(), name: "Basic Drums",   estimatedHours: 80,  category: .instruments, source: .builtIn),
    ]

    // MARK: - Coding (4)

    private static let coding: [Skill] = [
        Skill(id: UUID(), name: "Python Basics",        estimatedHours: 40, category: .coding, source: .builtIn),
        Skill(id: UUID(), name: "HTML & CSS Basics",    estimatedHours: 30, category: .coding, source: .builtIn),
        Skill(id: UUID(), name: "JavaScript Basics",    estimatedHours: 60, category: .coding, source: .builtIn),
        Skill(id: UUID(), name: "Swift Basics",         estimatedHours: 60, category: .coding, source: .builtIn),
    ]

    // MARK: - Fitness (3)

    private static let fitness: [Skill] = [
        Skill(id: UUID(), name: "Train for a 5K Run",  estimatedHours: 30, category: .fitness, source: .builtIn),
        Skill(id: UUID(), name: "30-Day Yoga Routine", estimatedHours: 15, category: .fitness, source: .builtIn),
        Skill(id: UUID(), name: "Learn Meditation",    estimatedHours: 10, category: .fitness, source: .builtIn),
    ]

    // MARK: - Creative (5)

    private static let creative: [Skill] = [
        Skill(id: UUID(), name: "Beginner Drawing",    estimatedHours: 50, category: .creative, source: .builtIn),
        Skill(id: UUID(), name: "Beginner Watercolor", estimatedHours: 40, category: .creative, source: .builtIn),
        Skill(id: UUID(), name: "Cook 10 New Dishes",  estimatedHours: 20, category: .creative, source: .builtIn),
        Skill(id: UUID(), name: "Basic Photography",   estimatedHours: 25, category: .creative, source: .builtIn),
        Skill(id: UUID(), name: "Beginner Knitting",   estimatedHours: 20, category: .creative, source: .builtIn),
    ]
}
