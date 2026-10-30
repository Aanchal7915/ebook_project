// Curated Indian & Global Best-selling E-Books for "THE THIRD EYE"
// Matches exact reference image data + interactive chapter previews

export const CATEGORIES_DATA = [
  { id: 'cat-spirituality', name: 'Spirituality', icon: 'Lotus', bg: 'bg-[#F2EEFB]', text: 'text-[#7C3AED]', borderColor: 'border-[#DDD6FE]' },
  { id: 'cat-selfhelp', name: 'Self Help', icon: 'Leaf', bg: 'bg-[#EDF8F3]', text: 'text-[#059669]', borderColor: 'border-[#A7F3D0]' },
  { id: 'cat-mental', name: 'Mental Wellness', icon: 'Brain', bg: 'bg-[#F4EFFC]', text: 'text-[#8B5CF6]', borderColor: 'border-[#DDD6FE]' },
  { id: 'cat-relationships', name: 'Relationships', icon: 'Heart', bg: 'bg-[#FDEFF3]', text: 'text-[#E11D48]', borderColor: 'border-[#FECDD3]' },
  { id: 'cat-business', name: 'Business & Career', icon: 'TrendingUp', bg: 'bg-[#EFF6FF]', text: 'text-[#2563EB]', borderColor: 'border-[#BFDBFE]' },
  { id: 'cat-fiction', name: 'Fiction', icon: 'BookOpen', bg: 'bg-[#FFF7ED]', text: 'text-[#D97706]', borderColor: 'border-[#FED7AA]' },
  { id: 'cat-motivation', name: 'Motivation', icon: 'Mountain', bg: 'bg-[#F0FDF4]', text: 'text-[#16A34A]', borderColor: 'border-[#BBF7D0]' },
  { id: 'cat-health', name: 'Health', icon: 'Activity', bg: 'bg-[#ECFDF5]', text: 'text-[#0D9488]', borderColor: 'border-[#99F6E4]' },
];

export const BOOKS_DATA = [
  {
    id: 'book-good-vibes',
    title: 'Good Vibes, Good Life',
    subtitle: 'How Self-Love Is the Key to Unlocking Your Greatness',
    author: 'Vex King',
    category: 'Self Help',
    price: 199,
    originalPrice: 499,
    rating: 4.8,
    reviewsCount: 3420,
    pages: 288,
    readTime: '4.5 hrs',
    coverStyle: {
      bg: 'from-[#FDFBF7] to-[#F5EFE6]',
      text: '#4A3B2C',
      accent: '#B45309',
      border: 'border-[#E7DEC8]',
      type: 'good-vibes'
    },
    synopsis: 'Vex King overcame adversity to become a beacon of hope for thousands of young people. Now, drawing from his personal experience and his intuitive wisdom, he shows you that when you change the way you think, feel, speak, and act, you begin to change the world.',
    sampleChapter: {
      number: 'Chapter 1',
      title: 'A Matter of Vibration',
      epigraph: 'Great things happen when you learn to love yourself unconditionally.',
      content: `Everything in the universe is made of vibrating energy. The higher your energetic vibration, the better you feel, and the more harmonious your reality becomes.

When you practice self-love, you are not merely pampering your ego; you are attuning your emotional frequency to abundance. Most people spend their days reacting to external circumstances—letting toxic gossip, digital noise, and outdated conditioning dictate their inner state.

True personal transformation begins the second you realize that you do not need permission to protect your peace. You become the conscious curator of your vibration.`
    }
  },
  {
    id: 'book-ikigai',
    title: 'Ikigai',
    subtitle: 'The Japanese Secret to a Long and Happy Life',
    author: 'Héctor García',
    category: 'Spirituality',
    price: 249,
    originalPrice: 599,
    rating: 4.7,
    reviewsCount: 5120,
    pages: 208,
    readTime: '3.8 hrs',
    coverStyle: {
      bg: 'from-[#EBF4FA] to-[#D5E6F3]',
      text: '#1E3A5F',
      accent: '#E11D48',
      border: 'border-[#C2DBEC]',
      type: 'ikigai'
    },
    synopsis: 'According to the Japanese, everyone has an ikigai—a reason for living. In the village of Ogimi in Okinawa, people live longer than anywhere else in the world. Discover the secret of purposeful longevity through mindful presence, gentle movement, and community connection.',
    sampleChapter: {
      number: 'Chapter 1',
      title: 'The Art of Staying Young While Growing Old',
      epigraph: 'Only staying active will make you want to live a hundred years. — Japanese proverb',
      content: `In the north of Okinawa lies Ogimi, a small rural village nicknamed the Village of Longevity. Here, residents in their nineties cultivate vegetable patches, sing folk melodies together, and greet each sunrise with effortless vitality.

When we interviewed elders aged 100 and above, one common word emerged again and again: 'Ikigai'. 

It is the convergence of four fundamental life currents: what you love, what you are good at, what the world needs, and what you can be paid for. When you dwell at the intersection of these four circles, work ceases to be labor and becomes a serene flow of natural service.`
    }
  },
  {
    id: 'book-atomic-habits',
    title: 'Atomic Habits',
    subtitle: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    author: 'James Clear',
    category: 'Self Help',
    price: 299,
    originalPrice: 799,
    rating: 4.9,
    reviewsCount: 9840,
    pages: 320,
    readTime: '5.5 hrs',
    coverStyle: {
      bg: 'from-[#FFFDF9] to-[#FDF4E7]',
      text: '#9A3412',
      accent: '#C2410C',
      border: 'border-[#FDE68A]',
      type: 'atomic-habits'
    },
    synopsis: 'No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.',
    sampleChapter: {
      number: 'Chapter 1',
      title: 'The Surprising Power of Atomic Habits',
      epigraph: 'You do not rise to the level of your goals. You fall to the level of your systems.',
      content: `In 2003, British Cycling hired Dave Brailsford as performance director. At the time, professional cyclists in Great Britain had endured nearly one hundred years of mediocrity, winning just a single Olympic gold medal.

Brailsford committed to a strategy he called 'the aggregation of marginal gains.' The whole principle came from the idea that if you broke down everything you could think of that goes into riding a bike, and then improved it by 1 percent, you will get a significant increase when you put them all together.

They redesigned bike seats, tested fabrics in wind tunnels, and even hired a surgeon to teach each rider the best way to wash their hands to reduce the chances of catching a cold.

Within five years, British riders dominated the Tour de France and Olympic velodromes. Changes that seem small and unimportant at first will compound into remarkable results if you are willing to stick with them for years.`
    }
  },
  {
    id: 'book-mountain-is-you',
    title: 'The Mountain Is You',
    subtitle: 'Transforming Self-Sabotage Into Self-Mastery',
    author: 'Brianna Wiest',
    category: 'Mental Wellness',
    price: 249,
    originalPrice: 649,
    rating: 4.9,
    reviewsCount: 4210,
    pages: 248,
    readTime: '4.0 hrs',
    coverStyle: {
      bg: 'from-[#0B1E2E] to-[#040C14]',
      text: '#E2E8F0',
      accent: '#D4AF37',
      border: 'border-[#1E3A5F]',
      type: 'mountain'
    },
    synopsis: 'This book explores how self-sabotaging behaviors stem from conflicting desires. To scale the mountain of your potential, you must do the deep inner work of excavating trauma, building emotional intelligence, and stepping into your highest self.',
    sampleChapter: {
      number: 'Chapter 1',
      title: 'The Nature of Self-Sabotage',
      epigraph: 'Your mountain is the block between you and the life you want to live.',
      content: `Self-sabotage is not a sign that you are broken. It is a sign that your conscious desires and your subconscious survival needs are pulling in opposite directions.

When you procrastinate on an important project, you are not simply lazy. Your nervous system perceives success as a threat to your current emotional safety zone—it fears the visibility, the expectations, or the potential for rejection.

To stop sabotaging your life, you must stop fighting your behaviors and start understanding the unspoken need they are trying to protect.`
    }
  },
  {
    id: 'book-think-like-a-monk',
    title: 'Think Like a Monk',
    subtitle: 'Train Your Mind for Peace and Purpose Every Day',
    author: 'Jay Shetty',
    category: 'Spirituality',
    price: 199,
    originalPrice: 599,
    rating: 4.8,
    reviewsCount: 6720,
    pages: 352,
    readTime: '6.0 hrs',
    coverStyle: {
      bg: 'from-[#1E293B] to-[#0F172A]',
      text: '#F8FAFC',
      accent: '#F59E0B',
      border: 'border-[#334155]',
      type: 'monk'
    },
    synopsis: 'Jay Shetty grew up in London and turned down corporate jobs to live as a monk in an ashram in India. In this practical guide, he translates ancient monastic wisdom into actionable daily habits for overcoming negativity, anxiety, and finding authentic purpose.',
    sampleChapter: {
      number: 'Chapter 1',
      title: 'Identity: I Am What I Think I Am',
      epigraph: 'When you tune out the noise of opinions, your genuine voice begins to speak.',
      content: `At age twenty-two, I swapped my business suits for robes, shaved my head, and moved to an ashram outside Mumbai.

For three years, I woke up at 4:00 AM, meditated for hours, read sacred Vedic texts, and helped build rural community shelters. The first lesson my mentor taught me was about identity:

'I am not what I think I am, and I am not what you think I am. I am what I think you think I am.'

We live in a reflection of a reflection. When we adopt the monk mindset, we stop looking outside for validation and begin anchoring our self-worth in timeless service and quiet contemplation.`
    }
  },
  {
    id: 'book-psychology-money',
    title: 'The Psychology of Money',
    subtitle: 'Timeless Lessons on Wealth, Greed, and Happiness',
    author: 'Morgan Housel',
    category: 'Business & Career',
    price: 249,
    originalPrice: 699,
    rating: 4.9,
    reviewsCount: 8190,
    pages: 256,
    readTime: '4.8 hrs',
    coverStyle: {
      bg: 'from-[#FAF8F5] to-[#F2EDE4]',
      text: '#1C1917',
      accent: '#059669',
      border: 'border-[#E7E0D3]',
      type: 'money'
    },
    synopsis: 'Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people. 19 short stories exploring the strange ways people think about money.',
    sampleChapter: {
      number: 'Chapter 1',
      title: 'No One\'s Crazy',
      epigraph: 'Your personal experiences with money make up maybe 0.00000001% of what’s happened in the world, but maybe 80% of how you think the world works.',
      content: `Every decision people make with money is justified by the information they have at the moment and their unique mental model of how the world works.

Someone who grew up in poverty thinks about risk and reward in ways the child of a wealthy investment banker cannot fathom. Someone who lived through high inflation experiences prices differently than someone who grew up with price stability.

Once you realize that no one is crazy, you stop judging financial choices through your own lens and start building a resilient portfolio tailored to your unique sleep-at-night threshold.`
    }
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 't-1',
    name: 'Ananya Varma',
    city: 'Delhi',
    rating: 5,
    quote: 'The Third Eye has completely changed the way I read. The collection is amazing and the experience is so smooth!'
  },
  {
    id: 't-2',
    name: 'Rohit Sharma',
    city: 'Mumbai',
    rating: 5,
    quote: 'I found so many life-changing books here. Instant access after payment is super helpful.'
  },
  {
    id: 't-3',
    name: 'Sneha Kapoor',
    city: 'Bangalore',
    rating: 5,
    quote: 'Beautiful platform with great categories. Perfect for anyone who loves reading.'
  }
];
