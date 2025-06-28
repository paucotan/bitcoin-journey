export const mockData = {
  learningPaths: [
    {
      id: 1,
      title: "The Money Story",
      level: "Beginner",
      description: "Discover why money matters and how it shapes our world",
      chapters: 8,
      estimatedHours: 4
    }
  ],
  chapters: [
    {
      id: 1,
      pathId: 1,
      title: "What is Money Really?",
      order: 1,
      lessons: 4,
      completed: true,
      current: false
    },
    {
      id: 2,
      pathId: 1,
      title: "The Wine Gets Watered Down",
      order: 2,
      lessons: 4,
      completed: true,
      current: false
    },
    {
      id: 3,
      pathId: 1,
      title: "When Money Goes Bad",
      order: 3,
      lessons: 3,
      completed: false,
      current: true
    },
    {
      id: 4,
      pathId: 1,
      title: "The Gold Standard Era",
      order: 4,
      lessons: 4,
      completed: false,
      current: false
    }
  ],
  lessons: [
    {
      id: 1,
      chapterId: 3,
      title: "Germany 1923: The Wheelbarrow Money",
      estimatedTime: "6 min",
      order: 1,
      modules: [
        {
          type: "story",
          content: {
            title: "A Trip to Buy Bread",
            story: "In 1923 Germany, Anna pushes a wheelbarrow full of money to the bakery. Not to buy bread for a week—just for one loaf. By the time she reaches the store, the price has doubled again.",
            image: "🛒💰"
          }
        },
        {
          type: "analogy",
          content: {
            concept: "Hyperinflation",
            analogy: "Imagine if your favorite coffee shop raised prices every hour. Your $5 morning coffee becomes $10 by lunch, $50 by dinner. That's what happened to German marks.",
            comparison: "Normal inflation: 2-3% per year | Hyperinflation: 200-300% per month"
          }
        },
        {
          type: "interactive",
          content: {
            title: "Hyperinflation Calculator",
            description: "See how quickly money loses value during hyperinflation"
          }
        }
      ]
    }
  ],
  concepts: [
    { id: 1, name: "Inflation", difficulty: "beginner", learned: true },
    { id: 2, name: "Hyperinflation", difficulty: "beginner", learned: false },
    { id: 3, name: "Cantillon Effect", difficulty: "intermediate", learned: false }
  ],
  storyData: {
    sections: [
      {
        id: 1,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        content: {
          year: "1923",
          location: "Berlin, Germany",
          character: "👩‍🍳 Anna",
          scene: "Anna's Kitchen",
          narrative: "Anna counts her money for today's shopping. She needs bread for her family.",
          visual: "💰",
          mood: "hopeful"
        }
      },
      {
        id: 2,
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        content: {
          time: "Morning",
          scene: "Walking to Market",
          narrative: "Anna fills her wheelbarrow with paper money. It takes both hands to carry enough for one loaf of bread.",
          visual: "🛒💸",
          revelation: "Wait... why does she need a wheelbarrow for money?",
          mood: "confused"
        }
      },
      {
        id: 3,
        background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        content: {
          time: "At the Bakery",
          scene: "Price Shock",
          narrative: "The baker shakes his head. 'Prices went up again this morning. You need twice as much now.'",
          visual: "🥖📈",
          price: "From 10,000 marks to 20,000 marks... for one loaf!",
          emotion: "😰",
          mood: "panic"
        }
      },
      {
        id: 4,
        background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        content: {
          scene: "The Revelation",
          narrative: "This is hyperinflation. When governments print too much money, each bill becomes worth less and less.",
          visual: "🖨️💵",
          analogy: "Like watering down wine - more liquid, but weaker taste",
          connection: "💡 This is why Bitcoin has a fixed supply of 21 million coins",
          mood: "understanding"
        }
      }
    ]
  }
};