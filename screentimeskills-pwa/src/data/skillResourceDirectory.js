// ============================================================================
// SKILL RESOURCE DIRECTORY — Unlocked App
// ============================================================================
// Curated free resources for every skill in the library.
// The first resource in each array is the PRIMARY ("Start Learning") link.
// Remaining entries are shown in the expanded resource list behind the paywall.
//
// Structure per entry:
//   { name, url, platform, description }
//
// Platform values: 'app' | 'website' | 'youtube' | 'course' | 'book' | 'tool' | 'community'
//
// Affiliate note: when you have affiliate accounts, swap URLs for tracked versions.
// Candidates: Coursera, Udemy, Skillshare, Amazon Associates, Headspace
// ============================================================================

export const SKILL_RESOURCE_DIRECTORY = {

  // ══════════════════════════════════════════════════════════════════════════
  //  LANGUAGES  (16 skills)
  // ══════════════════════════════════════════════════════════════════════════

  'Conversational Spanish': [
    { name: 'Duolingo Spanish',                  url: 'https://www.duolingo.com/course/es/en/Learn-Spanish',       platform: 'app',       description: 'Gamified daily lessons with speech recognition — the most popular free language app' },
    { name: 'Language Transfer — Complete Spanish', url: 'https://www.languagetransfer.org/complete-spanish',        platform: 'app',       description: 'Free audio course using the "thinking method" — builds sentences from logic, not memorization' },
    { name: 'SpanishPod101',                     url: 'https://www.youtube.com/@SpanishPod101',                    platform: 'youtube',   description: 'Thousands of free video & audio lessons organized by level' },
    { name: 'Dreaming Spanish',                  url: 'https://www.youtube.com/@DreamingSpanish',                  platform: 'youtube',   description: 'Comprehensible-input method — learn by watching, no English subtitles' },
    { name: 'Coffee Break Spanish',              url: 'https://coffeebreaklanguages.com/coffeebreakspanish/',      platform: 'website',   description: 'Free podcast-style lessons in 15-20 minute episodes, perfect for commutes' },
  ],

  'Conversational French': [
    { name: 'Duolingo French',                   url: 'https://www.duolingo.com/course/fr/en/Learn-French',        platform: 'app',       description: 'Gamified daily lessons — strong French course with pronunciation practice' },
    { name: 'Language Transfer — Introduction to French', url: 'https://www.languagetransfer.org/introduction-to-french', platform: 'app', description: 'Free audio course teaching you to construct French from patterns you already know' },
    { name: 'Francais avec Pierre',              url: 'https://www.youtube.com/@FrancaisavecPierre',              platform: 'youtube',   description: 'Native French teacher with lessons for all levels, huge free library' },
    { name: 'InnerFrench Podcast',               url: 'https://www.youtube.com/@innerFrench',                     platform: 'youtube',   description: 'Intermediate French listening practice — speaks slowly on interesting topics' },
    { name: 'Coffee Break French',               url: 'https://coffeebreaklanguages.com/coffeebreakfrench/',      platform: 'website',   description: 'Free podcast lessons from beginner to advanced in bite-sized episodes' },
  ],

  'Conversational Portuguese': [
    { name: 'Duolingo Portuguese',               url: 'https://www.duolingo.com/course/pt/en/Learn-Portuguese',    platform: 'app',       description: 'Gamified daily lessons for Brazilian Portuguese with speech exercises' },
    { name: 'PortuguesePod101',                  url: 'https://www.youtube.com/@PortuguesePod101',                platform: 'youtube',   description: 'Structured video & audio lessons for all levels with cultural context' },
    { name: 'Speaking Brazilian Language School', url: 'https://www.youtube.com/@SpeakingBrazilian',              platform: 'youtube',   description: 'Virginia teaches Brazilian Portuguese with clear grammar breakdowns' },
    { name: 'Practice Portuguese',               url: 'https://www.practiceportuguese.com/',                      platform: 'website',   description: 'European Portuguese focus — free podcast episodes and learning notes' },
  ],

  'Conversational Italian': [
    { name: 'Duolingo Italian',                  url: 'https://www.duolingo.com/course/it/en/Learn-Italian',      platform: 'app',       description: 'Gamified daily lessons for Italian with listening and speaking drills' },
    { name: 'Language Transfer — Introduction to Italian', url: 'https://www.languagetransfer.org/introduction-to-italian', platform: 'app', description: 'Free audio course using cognate patterns between English and Italian' },
    { name: 'Italy Made Easy',                   url: 'https://www.youtube.com/@ItalyMadeEasy',                   platform: 'youtube',   description: 'Manu teaches real conversational Italian with grammar and culture tips' },
    { name: 'Coffee Break Italian',              url: 'https://coffeebreaklanguages.com/coffeebreakitalian/',     platform: 'website',   description: 'Free podcast-style Italian lessons in manageable 20-minute episodes' },
  ],

  'Conversational German': [
    { name: 'Duolingo German',                   url: 'https://www.duolingo.com/course/de/en/Learn-German',       platform: 'app',       description: 'Gamified daily German lessons with grammar tips and listening practice' },
    { name: 'Language Transfer — Complete German', url: 'https://www.languagetransfer.org/complete-german',        platform: 'app',       description: 'Free audio course — "thinking method" builds German grammar from English parallels' },
    { name: 'Learn German with Anja',            url: 'https://www.youtube.com/@LearnGermanwithAnja',             platform: 'youtube',   description: 'Energetic native speaker with structured lessons from A1 to B2' },
    { name: 'Easy German',                       url: 'https://www.youtube.com/@EasyGerman',                      platform: 'youtube',   description: 'Street interviews with subtitles in German and English — real-world listening' },
    { name: 'DW Learn German',                   url: 'https://learngerman.dw.com/en/overview',                   platform: 'website',   description: 'Free comprehensive courses from Deutsche Welle, Germany\'s public broadcaster' },
  ],

  'Conversational Japanese': [
    { name: 'Duolingo Japanese',                 url: 'https://www.duolingo.com/course/ja/en/Learn-Japanese',     platform: 'app',       description: 'Learn hiragana, katakana, and basic conversation through daily gamified lessons' },
    { name: 'JapanesePod101',                    url: 'https://www.youtube.com/@JapanesePod101',                  platform: 'youtube',   description: 'Thousands of free video lessons from absolute beginner to advanced' },
    { name: 'Tae Kim\'s Guide to Learning Japanese', url: 'https://guidetojapanese.org/learn/',                   platform: 'website',   description: 'Comprehensive free grammar guide — the go-to reference for self-learners' },
    { name: 'Cure Dolly\'s Organic Japanese',    url: 'https://www.youtube.com/@organicjapanesewithcuredolly',    platform: 'youtube',   description: 'Explains Japanese grammar from a Japanese perspective, not English translations' },
    { name: 'WaniKani (Free Levels)',             url: 'https://www.wanikani.com/',                                platform: 'app',       description: 'SRS-based kanji learning — first 3 levels free, covers ~100 kanji' },
  ],

  'Conversational Mandarin': [
    { name: 'Duolingo Chinese',                  url: 'https://www.duolingo.com/course/zh/en/Learn-Chinese',      platform: 'app',       description: 'Learn pinyin, characters, and basic phrases through gamified daily lessons' },
    { name: 'ChinesePod101',                     url: 'https://www.youtube.com/@ChineseClass101',                 platform: 'youtube',   description: 'Extensive free lesson library with native speakers covering all levels' },
    { name: 'Mandarin Corner',                   url: 'https://www.youtube.com/@MandarinCorner',                  platform: 'youtube',   description: 'Real-life conversations with pinyin and English subtitles for immersive learning' },
    { name: 'HelloChinese',                      url: 'https://www.hellochinese.cc/',                             platform: 'app',       description: 'Free app with stroke-order practice, tone training, and speech recognition' },
    { name: 'Pleco Dictionary',                  url: 'https://www.pleco.com/',                                   platform: 'app',       description: 'Essential free Chinese dictionary with character recognition and flashcards' },
  ],

  'Conversational Korean': [
    { name: 'Duolingo Korean',                   url: 'https://www.duolingo.com/course/ko/en/Learn-Korean',       platform: 'app',       description: 'Learn Hangul and basic Korean through gamified daily lessons' },
    { name: 'Talk To Me In Korean',              url: 'https://talktomeinkorean.com/',                            platform: 'website',   description: 'Free structured curriculum from Level 1-9 with audio lessons and PDFs' },
    { name: 'KoreanClass101',                    url: 'https://www.youtube.com/@KoreanClass101',                  platform: 'youtube',   description: 'Thousands of free video lessons organized by proficiency level' },
    { name: 'GO! Billy Korean',                  url: 'https://www.youtube.com/@GoBillyKorean',                   platform: 'youtube',   description: 'Clear grammar explanations with a structured beginner series' },
  ],

  'Conversational Arabic': [
    { name: 'Duolingo Arabic',                   url: 'https://www.duolingo.com/course/ar/en/Learn-Arabic',       platform: 'app',       description: 'Learn Modern Standard Arabic script and basics through daily lessons' },
    { name: 'Language Transfer — Introduction to Arabic', url: 'https://www.languagetransfer.org/introduction-to-arabic', platform: 'app', description: 'Free audio course building Arabic from logical patterns' },
    { name: 'ArabicPod101',                      url: 'https://www.youtube.com/@ArabicPod101',                    platform: 'youtube',   description: 'Free video lessons from absolute beginner through advanced' },
    { name: 'Arabic with Maha',                  url: 'https://www.youtube.com/@LearnArabicwithMaha',             platform: 'youtube',   description: 'Native speaker teaching both MSA and Levantine dialect with clear explanations' },
  ],

  'Conversational Russian': [
    { name: 'Duolingo Russian',                  url: 'https://www.duolingo.com/course/ru/en/Learn-Russian',      platform: 'app',       description: 'Learn Cyrillic and basic Russian through gamified daily lessons' },
    { name: 'RussianPod101',                     url: 'https://www.youtube.com/@RussianPod101',                   platform: 'youtube',   description: 'Extensive free video library with native speakers and cultural lessons' },
    { name: 'Russian with Max',                  url: 'https://www.youtube.com/@RussianWithMax',                  platform: 'youtube',   description: 'Comprehensible input — slow, clear Russian on interesting topics with subtitles' },
    { name: 'RT Learn Russian',                  url: 'https://learnrussian.rt.com/',                             platform: 'website',   description: 'Free structured course with alphabet, grammar, and interactive exercises' },
  ],

  'Conversational Hindi': [
    { name: 'Duolingo Hindi',                    url: 'https://www.duolingo.com/course/hi/en/Learn-Hindi',        platform: 'app',       description: 'Learn Devanagari script and conversational Hindi through daily lessons' },
    { name: 'HindiPod101',                       url: 'https://www.youtube.com/@HindiPod101',                     platform: 'youtube',   description: 'Structured free lessons covering vocabulary, grammar, and culture' },
    { name: 'Hindi with Anil',                   url: 'https://www.youtube.com/@hindiwithanil',                   platform: 'youtube',   description: 'Clear, structured Hindi lessons designed for English speakers' },
    { name: 'Learning Hindi!',                   url: 'https://www.learninghindi.com/',                           platform: 'website',   description: 'Free lessons covering Devanagari script, grammar, and useful phrases' },
  ],

  'Conversational Dutch': [
    { name: 'Duolingo Dutch',                    url: 'https://www.duolingo.com/course/nl/en/Learn-Dutch',        platform: 'app',       description: 'Gamified daily Dutch lessons with pronunciation practice' },
    { name: 'Learn Dutch with DutchPod101',      url: 'https://www.youtube.com/@DutchPod101',                     platform: 'youtube',   description: 'Free video lessons organized by level from beginner to advanced' },
    { name: 'Bart de Pau — Learn Dutch',         url: 'https://www.youtube.com/@learndutch',                      platform: 'youtube',   description: 'Professional Dutch teacher with structured grammar and conversation lessons' },
    { name: 'dutchgrammar.com',                  url: 'https://www.dutchgrammar.com/',                            platform: 'website',   description: 'Comprehensive free Dutch grammar reference with exercises' },
  ],

  'Conversational Swedish': [
    { name: 'Duolingo Swedish',                  url: 'https://www.duolingo.com/course/sv/en/Learn-Swedish',      platform: 'app',       description: 'One of Duolingo\'s best courses — detailed tips and a strong contributor community' },
    { name: 'SwedishPod101',                     url: 'https://www.youtube.com/@SwedishPod101',                   platform: 'youtube',   description: 'Free video lessons covering vocabulary, grammar, and Swedish culture' },
    { name: 'Say It In Swedish',                 url: 'https://www.youtube.com/@SayItInSwedish',                  platform: 'youtube',   description: 'Native speaker with beginner-friendly lessons and pronunciation guides' },
    { name: 'Swedish Made Easy',                 url: 'https://www.swedishmadeeasy.com/',                         platform: 'website',   description: 'Free structured lessons covering basics through intermediate Swedish' },
  ],

  'Conversational Turkish': [
    { name: 'Duolingo Turkish',                  url: 'https://www.duolingo.com/course/tr/en/Learn-Turkish',      platform: 'app',       description: 'Learn Turkish grammar and vocabulary through daily gamified lessons' },
    { name: 'Language Transfer — Introduction to Turkish', url: 'https://www.languagetransfer.org/introduction-to-turkish', platform: 'app', description: 'Free audio course using the thinking method to build Turkish from logic' },
    { name: 'TurkishClass101',                   url: 'https://www.youtube.com/@TurkishClass101',                 platform: 'youtube',   description: 'Free video lessons for all levels with native speaker instruction' },
    { name: 'Turkish with Selin',                url: 'https://www.youtube.com/@TurkishWithSelin',                platform: 'youtube',   description: 'Clear, well-organized lessons from a native Turkish teacher' },
  ],

  'Conversational Greek': [
    { name: 'Duolingo Greek',                    url: 'https://www.duolingo.com/course/el/en/Learn-Greek',        platform: 'app',       description: 'Learn the Greek alphabet and conversational Greek through daily lessons' },
    { name: 'Language Transfer — Complete Greek', url: 'https://www.languagetransfer.org/complete-greek',          platform: 'app',       description: 'Complete free audio course — one of Language Transfer\'s flagship courses' },
    { name: 'GreekPod101',                       url: 'https://www.youtube.com/@GreekPod101',                     platform: 'youtube',   description: 'Free video lessons from absolute beginner to advanced Greek' },
    { name: 'Learn Greek with Lina',             url: 'https://www.youtube.com/@linaaaap1',                       platform: 'youtube',   description: 'Native speaker with structured beginner lessons and cultural context' },
  ],

  'Conversational Vietnamese': [
    { name: 'Duolingo Vietnamese',               url: 'https://www.duolingo.com/course/vi/en/Learn-Vietnamese',   platform: 'app',       description: 'Learn Vietnamese tones and basic conversation through daily lessons' },
    { name: 'VietnamesePod101',                  url: 'https://www.youtube.com/@VietnamesePod101',                platform: 'youtube',   description: 'Free video lessons covering vocabulary, grammar, and pronunciation' },
    { name: 'Learn Vietnamese with Annie',       url: 'https://www.youtube.com/@LearnVietnameseWithAnnie',        platform: 'youtube',   description: 'Native speaker with clear tone explanations and conversational practice' },
    { name: 'Tieng Viet Oi',                     url: 'https://www.youtube.com/@TiengVietOi',                     platform: 'youtube',   description: 'Vietnamese lessons focused on northern dialect with subtitles' },
  ],

  // ══════════════════════════════════════════════════════════════════════════
  //  INSTRUMENTS  (12 skills)
  // ══════════════════════════════════════════════════════════════════════════

  'Basic Guitar': [
    { name: 'JustinGuitar Beginner Course',      url: 'https://www.justinguitar.com/beginner',                    platform: 'website',   description: 'The gold standard — structured free course that has taught 5M+ students worldwide' },
    { name: 'Marty Music',                       url: 'https://www.youtube.com/@MartyMusic',                      platform: 'youtube',   description: '5M+ subscribers — learn popular songs with easy-to-follow chord tutorials' },
    { name: 'Andy Guitar',                       url: 'https://www.youtube.com/@AndyGuitar',                      platform: 'youtube',   description: 'Structured 10-day beginner course plus hundreds of song lessons' },
    { name: 'Ultimate Guitar Tabs',              url: 'https://www.ultimate-guitar.com/',                         platform: 'website',   description: 'Massive free library of guitar tabs and chords for any song' },
    { name: 'JustinGuitar Beginner App',         url: 'https://www.justinguitar.com/guitar-lessons',              platform: 'app',       description: 'Companion app with chord practice, tuner, and progress tracking' },
  ],

  'Basic Piano': [
    { name: 'Hoffman Academy',                   url: 'https://www.hoffmanacademy.com/',                          platform: 'website',   description: '400+ free video lessons in a structured curriculum from total beginner onward' },
    { name: 'Pianote (YouTube)',                  url: 'https://www.youtube.com/@Pianote',                         platform: 'youtube',   description: 'Free beginner lessons, music theory, and popular song tutorials' },
    { name: 'Piano Lessons on the Go',           url: 'https://www.youtube.com/@PianoLessonsOnTheGo',             platform: 'youtube',   description: 'Mangold Project\'s structured beginner piano series with theory' },
    { name: 'Synthesia',                         url: 'https://synthesiagame.com/',                               platform: 'app',       description: 'Free "Guitar Hero for piano" — falling-note visuals for learning songs' },
    { name: 'musictheory.net',                   url: 'https://www.musictheory.net/',                             platform: 'website',   description: 'Free interactive music theory lessons and exercises — essential companion' },
  ],

  'Basic Ukulele': [
    { name: 'The Ukulele Teacher',               url: 'https://www.youtube.com/@TheUkuleleTeacher',               platform: 'youtube',   description: 'Hundreds of free song tutorials — the largest ukulele lesson library on YouTube' },
    { name: 'Bernadette Teaches Music',          url: 'https://www.youtube.com/@BernadetteTeachesMusic',          platform: 'youtube',   description: 'Structured beginner ukulele course with clear, patient instruction' },
    { name: 'Ukulele Underground',               url: 'https://www.youtube.com/@uaboreal',                       platform: 'youtube',   description: 'Free beginner lessons plus strumming patterns and chord tutorials' },
    { name: 'Ukulele Tabs',                      url: 'https://www.ukulele-tabs.com/',                           platform: 'website',   description: 'Free ukulele tab & chord library for thousands of songs' },
  ],

  'Basic Drums': [
    { name: 'Drumeo (YouTube)',                  url: 'https://www.youtube.com/@Drumeo',                          platform: 'youtube',   description: 'Professional-quality free lessons from world-class drummers' },
    { name: 'Stephen Clark — Drum Beats Online', url: 'https://www.youtube.com/@DrumBeatsOnline',                 platform: 'youtube',   description: 'Structured beginner drum lessons with practice play-alongs' },
    { name: 'Rob Brown Drums',                   url: 'https://www.youtube.com/@RobBrownDrums',                   platform: 'youtube',   description: 'Beginner-focused drum lessons with simple, clear instruction' },
    { name: 'Vic Firth Rudiment Guide',          url: 'https://vicfirth.zildjian.com/education/40-essential-rudiments.html', platform: 'website', description: 'The 40 essential drum rudiments with notation and audio — free from Vic Firth' },
  ],

  'Basic Violin': [
    { name: 'Violin Tutor Pro',                  url: 'https://www.youtube.com/@ViolinTutorPro',                  platform: 'youtube',   description: 'Structured free beginner violin course with sheet music and practice tips' },
    { name: 'Alison Sparrow Violin',             url: 'https://www.youtube.com/@AlisonSparrow',                   platform: 'youtube',   description: 'Free beginner-to-intermediate lessons with clear bowing and fingering instruction' },
    { name: 'Violinspiration',                   url: 'https://violinspiration.com/',                             platform: 'website',   description: 'Free sheet music, tutorials, and a structured beginner learning path' },
    { name: 'Fiddlerman',                        url: 'https://fiddlerman.com/free-violin-lessons/',              platform: 'website',   description: 'Free video lessons and a supportive community forum for beginners' },
  ],

  'Basic Cello': [
    { name: 'CelloBello',                        url: 'https://www.cellobello.org/',                              platform: 'website',   description: 'Free lessons, masterclasses, and practice guides from world-class cellists' },
    { name: 'The Cello Teacher — Paul Quigley',  url: 'https://www.youtube.com/@PaulQuigley0303',                 platform: 'youtube',   description: 'Structured free cello lessons for absolute beginners' },
    { name: 'Sarah Joy — Cello',                 url: 'https://www.youtube.com/@SarahJoyCello',                   platform: 'youtube',   description: 'Beginner cello tutorials with warm, encouraging instruction' },
    { name: 'IMSLP (Sheet Music)',               url: 'https://imslp.org/',                                       platform: 'website',   description: 'Massive free library of public-domain sheet music for cello and all instruments' },
  ],

  'Basic Bass Guitar': [
    { name: 'TalkingBass — Mark J Smith',        url: 'https://www.talkingbass.net/beginner-lessons/',             platform: 'website',   description: 'The best free structured bass course online — beginner through advanced' },
    { name: 'TalkingBass (YouTube)',              url: 'https://www.youtube.com/@TalkingBass',                     platform: 'youtube',   description: 'Hundreds of free video lessons with tabs and practice tracks' },
    { name: 'Daric Bennett\'s Bass Lessons',     url: 'https://www.youtube.com/@DaricBennettsBassLessons',        platform: 'youtube',   description: 'Groove-focused bass lessons teaching feel and musicality' },
    { name: 'StudyBass',                         url: 'https://www.studybass.com/',                               platform: 'website',   description: 'Free structured bass guitar curriculum — fundamentals through music theory' },
  ],

  'Basic Saxophone': [
    { name: 'McGill Music Sax School',           url: 'https://www.youtube.com/@McGillMusicSaxSchool',            platform: 'youtube',   description: 'Structured free beginner saxophone lessons from professional player Nigel McGill' },
    { name: 'BetterSax — Jay Metcalf',           url: 'https://www.youtube.com/@BetterSax',                       platform: 'youtube',   description: 'Free beginner course plus technique, tone, and jazz improvisation lessons' },
    { name: 'Sax School Online',                 url: 'https://www.youtube.com/@saxschool',                       platform: 'youtube',   description: 'Free YouTube lessons covering fundamentals, embouchure, and reading music' },
  ],

  'Basic Trumpet': [
    { name: 'TrumpetTips — Charlie Porter',      url: 'https://www.youtube.com/@CharlieTrumpet',                  platform: 'youtube',   description: 'Free lessons from professional trumpeter covering fundamentals and practice routines' },
    { name: 'Trumpet Tutorial — Kurt Thompson',  url: 'https://www.youtube.com/@TrumpetTutorial',                 platform: 'youtube',   description: 'Beginner-focused trumpet lessons with embouchure tips and exercises' },
    { name: 'IMSLP Trumpet Music',               url: 'https://imslp.org/',                                       platform: 'website',   description: 'Free public-domain trumpet etudes and method books (Arban, Clarke)' },
  ],

  'Basic Harmonica': [
    { name: 'Adam Gussow — Kudzunot',           url: 'https://www.youtube.com/@Kudzunot',                        platform: 'youtube',   description: 'University professor and blues harmonica master with 400+ free lessons' },
    { name: 'Tomlin Leckie Harmonica',           url: 'https://www.youtube.com/@TomlinLeckie',                    platform: 'youtube',   description: 'Structured beginner harmonica lessons with tabs and backing tracks' },
    { name: 'Harptabs.com',                      url: 'https://www.harptabs.com/',                                platform: 'website',   description: 'Huge free library of harmonica tabs for popular songs' },
    { name: 'Liam Ward — LearnTheHarmonica.com', url: 'https://www.learntheharmonica.com/',                       platform: 'website',   description: 'Free beginner harmonica lessons with step-by-step guidance' },
  ],

  'Basic Banjo': [
    { name: 'Jim Pankey — Beginner Banjo',       url: 'https://www.youtube.com/@jimpankey',                       platform: 'youtube',   description: 'Free 6-lesson beginner banjo series — one of YouTube\'s best banjo teachers' },
    { name: 'Eli Gilbert Banjo',                 url: 'https://www.youtube.com/@EliGilbertBanjo',                 platform: 'youtube',   description: 'Free bluegrass banjo lessons with tab breakdowns and practice tips' },
    { name: 'BanjoHangout',                      url: 'https://www.banjohangout.org/',                            platform: 'community', description: 'Free tabs, lessons, forums, and the largest online banjo community' },
  ],

  'Basic Mandolin': [
    { name: 'Baron Collins-Hill',                url: 'https://www.youtube.com/@BaronCollinsHill',                platform: 'youtube',   description: 'Free mandolin lessons from basics to bluegrass with tab and notation' },
    { name: 'Mandolin Cafe',                     url: 'https://www.mandolincafe.com/',                            platform: 'community', description: 'Free tabs, forums, and lessons — the hub of the online mandolin community' },
    { name: 'Adam Granger Mandolin',             url: 'https://www.youtube.com/@MandoLessons',                    platform: 'youtube',   description: 'Free beginner mandolin lessons covering chords, strumming, and tunes' },
  ],

  // ══════════════════════════════════════════════════════════════════════════
  //  CODING  (14 skills)  — verified via web research
  // ══════════════════════════════════════════════════════════════════════════

  'Python Basics': [
    { name: 'Harvard CS50P',                     url: 'https://cs50.harvard.edu/python/',                         platform: 'course',    description: 'University-quality Python course from Harvard — 10 weeks, free certificate via OpenCourseWare' },
    { name: 'Automate the Boring Stuff (3rd Ed)', url: 'https://automatetheboringstuff.com/3e/',                  platform: 'book',      description: 'Write working scripts that automate real tasks within the first few chapters' },
    { name: 'freeCodeCamp Scientific Computing with Python', url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python', platform: 'tool', description: '~300 hours of project-based Python curriculum with free certification' },
    { name: 'Exercism Python Track',             url: 'https://exercism.org/tracks/python',                       platform: 'tool',      description: '146 exercises across 17 concepts with free volunteer mentoring' },
    { name: 'Corey Schafer — Python Tutorials',  url: 'https://www.youtube.com/playlist?list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7', platform: 'youtube', description: 'Clear, well-paced 9-hour playlist covering fundamentals through modules' },
  ],

  'HTML & CSS Basics': [
    { name: 'The Odin Project (Foundations)',     url: 'https://www.theodinproject.com/',                          platform: 'tool',      description: 'Completely free open-source curriculum teaching HTML, CSS, JS through real projects' },
    { name: 'freeCodeCamp Responsive Web Design', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/', platform: 'tool', description: 'Build 20 projects including a survey form and tribute page, earn free certification' },
    { name: 'MDN Web Docs',                      url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML',      platform: 'website',   description: 'Mozilla\'s official docs — the reference pros actually use, with structured beginner tutorials' },
    { name: 'Kevin Powell (YouTube)',             url: 'https://www.youtube.com/@KevinPowell',                     platform: 'youtube',   description: 'Nearly 1M subscribers, 1000+ CSS-focused videos — the best CSS YouTube channel' },
    { name: 'Flexbox Froggy / CSS Diner',        url: 'https://flexboxfroggy.com/',                               platform: 'tool',      description: 'Learn CSS selectors and Flexbox through fun browser games with visual feedback' },
  ],

  'JavaScript Basics': [
    { name: 'freeCodeCamp JS Algorithms & Data Structures', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/', platform: 'tool', description: 'Hundreds of hours of content culminating in 5 certification projects, entirely free' },
    { name: 'The Odin Project (JS Path)',        url: 'https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript', platform: 'tool', description: 'Project-heavy path that teaches you to learn like a professional developer' },
    { name: 'JavaScript.info',                   url: 'https://javascript.info/',                                 platform: 'book',      description: 'The most thorough free JS reference — core JS through async/await, updated regularly' },
    { name: 'Eloquent JavaScript (4th Edition)', url: 'https://eloquentjavascript.net/',                          platform: 'book',      description: 'Classic free book with runnable code examples emphasizing deep understanding' },
    { name: 'Traversy Media',                    url: 'https://www.youtube.com/@TraversyMedia',                   platform: 'youtube',   description: '2M+ subscribers — well-structured crash courses covering JS fundamentals and frameworks' },
  ],

  'Swift Basics': [
    { name: '100 Days of SwiftUI (Hacking with Swift)', url: 'https://www.hackingwithswift.com/100/swiftui',      platform: 'course',    description: '19 projects plus challenges — the most comprehensive free SwiftUI resource' },
    { name: 'Swift for Complete Beginners',      url: 'https://www.hackingwithswift.com/read/0/overview',          platform: 'website',   description: 'Teaches Swift fundamentals before building apps, short digestible lessons' },
    { name: 'Apple Swift Documentation',         url: 'https://docs.swift.org/swift-book/documentation/the-swift-programming-language/', platform: 'website', description: 'The authoritative reference from Apple with playground-ready examples' },
    { name: 'Swift Playgrounds',                 url: 'https://www.apple.com/swift/playgrounds/',                 platform: 'app',       description: 'Free iPad/Mac app from Apple — learn Swift through interactive puzzles' },
    { name: 'Unwrap App',                        url: 'https://apps.apple.com/app/unwrap/id1440611372',           platform: 'app',       description: 'Free open-source app by Paul Hudson for practicing Swift on the go' },
  ],

  'React Basics': [
    { name: 'Official React Docs (react.dev)',   url: 'https://react.dev/learn',                                  platform: 'website',   description: 'Interactive docs teaching modern React with hooks from scratch — includes tic-tac-toe tutorial' },
    { name: 'Scrimba Learn React',               url: 'https://scrimba.com/learn-react-c0e',                      platform: 'tool',      description: '15+ hour free course where you code alongside the instructor' },
    { name: 'freeCodeCamp Front End Libraries',  url: 'https://www.freecodecamp.org/learn/front-end-development-libraries/', platform: 'tool', description: 'Covers React, Redux, and related tools with free certification' },
    { name: 'The Odin Project (React Course)',   url: 'https://www.theodinproject.com/paths/full-stack-javascript/courses/react', platform: 'tool', description: 'Project-heavy React curriculum teaching real developer workflows' },
    { name: 'Traversy Media — React Crash Course', url: 'https://www.youtube.com/@TraversyMedia',                 platform: 'youtube',   description: 'Focused crash course that gets you building a functional React app in one sitting' },
  ],

  'TypeScript Basics': [
    { name: 'The TypeScript Handbook',           url: 'https://www.typescriptlang.org/docs/handbook/intro.html',  platform: 'website',   description: 'The definitive starting point from Microsoft — comprehensive with inline code examples' },
    { name: 'Total TypeScript — Beginner Tutorial', url: 'https://www.totaltypescript.com/tutorials/beginners-typescript', platform: 'tool', description: '18 exercise-driven lessons from Matt Pocock with video explanations' },
    { name: 'TypeScript Playground',             url: 'https://www.typescriptlang.org/play',                      platform: 'tool',      description: 'Write, test, and share TypeScript code in the browser with instant error feedback' },
    { name: 'Scrimba Learn TypeScript',          url: 'https://scrimba.com/learn/typescript',                     platform: 'tool',      description: 'Practical approach learning TS by building a real project with interactive coding' },
  ],

  'SQL Basics': [
    { name: 'SQLBolt',                           url: 'https://sqlbolt.com/',                                     platform: 'tool',      description: 'Fully interactive course covering queries, joins, aggregations — no account needed' },
    { name: 'Khan Academy — Intro to SQL',       url: 'https://www.khanacademy.org/computing/computer-programming/sql', platform: 'course', description: 'Video explanations paired with hands-on coding challenges in the browser' },
    { name: 'Mode Analytics SQL Tutorial',       url: 'https://mode.com/sql-tutorial/',                           platform: 'tool',      description: 'Free browser-based tutorial from beginner to advanced — top-tier structured course' },
    { name: 'freeCodeCamp Relational Database',  url: 'https://www.freecodecamp.org/learn/relational-database/',  platform: 'tool',      description: 'Learn SQL and PostgreSQL through hands-on projects in a real terminal environment' },
    { name: 'W3Schools SQL Tutorial',            url: 'https://www.w3schools.com/sql/',                           platform: 'website',   description: 'Quick reference with "Try It Yourself" editor for every concept' },
  ],

  'Java Basics': [
    { name: 'University of Helsinki MOOC.fi',    url: 'https://java-programming.mooc.fi/',                        platform: 'course',    description: 'The same material used in Helsinki\'s CS degree — the most rigorous free Java course' },
    { name: 'Codecademy Learn Java (Free Tier)', url: 'https://www.codecademy.com/learn/learn-java',              platform: 'tool',      description: 'In-browser coding with instant feedback — covers fundamentals through OOP' },
    { name: 'Exercism Java Track',               url: 'https://exercism.org/tracks/java',                         platform: 'tool',      description: '158 exercises across 26 concepts with free mentoring' },
    { name: 'Oracle Java Tutorials',             url: 'https://docs.oracle.com/javase/tutorial/',                 platform: 'website',   description: 'Official tutorials from Java\'s creators — authoritative language reference' },
  ],

  'C++ Basics': [
    { name: 'LearnCpp.com',                      url: 'https://www.learncpp.com/',                                platform: 'website',   description: 'The gold standard free C++ tutorial — basics through modern C++, maintained since 2007' },
    { name: 'The Cherno\'s C++ Series',          url: 'https://www.youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb', platform: 'youtube', description: '98 videos from a former EA game dev — practical hardware-level explanations' },
    { name: 'Exercism C++ Track',                url: 'https://exercism.org/tracks/cpp',                          platform: 'tool',      description: 'Practice exercises with automated analysis and free mentoring' },
    { name: 'cppreference.com',                  url: 'https://en.cppreference.com/',                             platform: 'website',   description: 'The most complete and accurate C++ reference — essential companion' },
  ],

  'Rust Basics': [
    { name: 'The Rust Book',                     url: 'https://doc.rust-lang.org/book/',                          platform: 'book',      description: 'The official comprehensive guide — covers ownership, borrowing, and all core concepts' },
    { name: 'Rustlings',                         url: 'https://rustlings.rust-lang.org/',                         platform: 'tool',      description: 'Bite-sized CLI exercises with hints — the best way to reinforce Rust Book concepts' },
    { name: 'Rust by Example',                   url: 'https://doc.rust-lang.org/rust-by-example/',               platform: 'website',   description: 'Practical code examples runnable in the browser — great for learning by doing' },
    { name: 'Exercism Rust Track',               url: 'https://exercism.org/tracks/rust',                         platform: 'tool',      description: '99 exercises with free mentoring from experienced Rust developers' },
    { name: 'Rust by Practice',                  url: 'https://practice.course.rs/',                              platform: 'tool',      description: 'Hands-on exercises to make each one compile without errors' },
  ],

  'Go Basics': [
    { name: 'A Tour of Go',                      url: 'https://go.dev/tour/',                                     platform: 'tool',      description: 'Official interactive tutorial from the Go team — runs in the browser with exercises' },
    { name: 'Go by Example',                     url: 'https://gobyexample.com/',                                 platform: 'website',   description: 'Annotated example programs covering every core Go concept' },
    { name: 'Effective Go',                      url: 'https://go.dev/doc/effective_go',                          platform: 'website',   description: 'Official guide to writing clear, idiomatic Go code' },
    { name: 'Exercism Go Track',                 url: 'https://exercism.org/tracks/go',                           platform: 'tool',      description: '165 exercises across 34 concepts with free mentoring — the largest free Go exercise set' },
    { name: 'Gophercises',                       url: 'https://gophercises.com/',                                 platform: 'course',    description: '20+ hands-on projects bridging the gap from tutorials to real Go code' },
  ],

  'Data Science with Python': [
    { name: 'Kaggle Learn',                      url: 'https://www.kaggle.com/learn',                             platform: 'tool',      description: 'Bite-sized courses with hands-on challenges in a real data environment' },
    { name: 'freeCodeCamp Data Analysis with Python', url: 'https://www.freecodecamp.org/learn/data-analysis-with-python', platform: 'tool', description: 'Covers NumPy, Pandas, Matplotlib through real-world projects with free certification' },
    { name: 'Harvard CS50 Intro to AI with Python', url: 'https://cs50.harvard.edu/ai/',                          platform: 'course',    description: 'Free Harvard course covering search, ML, and neural networks using Python' },
    { name: 'Python Data Science Handbook',      url: 'https://jakevdp.github.io/PythonDataScienceHandbook/',     platform: 'book',      description: 'Covers NumPy, Pandas, Matplotlib, scikit-learn — the standard reference' },
  ],

  'iOS App Development': [
    { name: 'Stanford CS193p — Developing Apps for iOS', url: 'https://cs193p.stanford.edu/',                     platform: 'course',    description: 'Stanford\'s full iOS development course using SwiftUI — university quality, free' },
    { name: '100 Days of SwiftUI',               url: 'https://www.hackingwithswift.com/100/swiftui',             platform: 'course',    description: '19 app projects with daily challenges — most structured free path to iOS developer' },
    { name: 'Apple Developer — Get Started',     url: 'https://developer.apple.com/ios/get-started/',             platform: 'website',   description: 'Apple\'s own starting point with tutorials, sample code, and documentation' },
    { name: 'SwiftfulThinking',                  url: 'https://www.youtube.com/@SwiftfulThinking',                platform: 'youtube',   description: 'Focused 20-30 min videos recreating real app UIs (Netflix, Spotify)' },
  ],

  'Android Development': [
    { name: 'Android Basics with Compose (Google)', url: 'https://developer.android.com/courses/android-basics-compose/course', platform: 'course', description: 'Google\'s official course teaching modern Android with Jetpack Compose and Kotlin' },
    { name: 'Kotlin Bootcamp for Programmers',   url: 'https://developer.android.com/courses/kotlin-bootcamp/overview', platform: 'course', description: 'Google\'s official Kotlin bootcamp — learn the language before Android frameworks' },
    { name: 'Exercism Kotlin Track',             url: 'https://exercism.org/tracks/kotlin',                       platform: 'tool',      description: 'Practice Kotlin through exercises with free mentoring' },
    { name: 'Philipp Lackner (YouTube)',          url: 'https://www.youtube.com/@PhilippLackner',                  platform: 'youtube',   description: 'Modern Android tutorials with Kotlin, Jetpack Compose, and MVVM architecture' },
  ],

  // ══════════════════════════════════════════════════════════════════════════
  //  FITNESS  (13 skills)
  // ══════════════════════════════════════════════════════════════════════════

  'Train for a 5K Run': [
    { name: 'Nike Run Club App',                 url: 'https://www.nike.com/nrc-app',                             platform: 'app',       description: 'Free guided run plans with audio coaching — structured beginner-to-5K program' },
    { name: 'Hal Higdon 5K Training',            url: 'https://www.halhigdon.com/training/5k-training/',          platform: 'website',   description: 'The most trusted free 5K training plans from the godfather of marathon training' },
    { name: 'Couch to 5K (NHS)',                 url: 'https://www.nhs.uk/live-well/exercise/running-and-aerobic-exercises/get-running-with-couch-to-5k/', platform: 'app', description: 'Free 9-week plan with podcast episodes — proven to get non-runners to 5K' },
    { name: 'The Run Experience',                url: 'https://www.youtube.com/@TheRunExperience',                platform: 'youtube',   description: 'Free running form, training, and injury prevention videos' },
  ],

  '30-Day Yoga Routine': [
    { name: 'Yoga With Adriene — 30 Days of Yoga', url: 'https://www.youtube.com/playlist?list=PLui6Eyny-UzwIo3OBXV_KlsWaxUANvWhh', platform: 'youtube', description: 'The internet\'s most popular free yoga series — 12M+ subscribers, warm and welcoming' },
    { name: 'Yoga With Adriene (Channel)',       url: 'https://www.youtube.com/@yogawithadriene',                 platform: 'youtube',   description: 'Multiple 30-day series (HOME, TRUE, MOVE) plus hundreds of individual practices' },
    { name: 'SarahBethYoga',                     url: 'https://www.youtube.com/@SarahBethYoga',                   platform: 'youtube',   description: 'Free 30-day challenges and yoga for specific needs (back pain, flexibility)' },
    { name: 'Down Dog App (Free Tier)',          url: 'https://www.downdogapp.com/',                              platform: 'app',       description: 'AI-generated yoga sessions — free tier gives full access to many class types' },
  ],

  'Learn Meditation': [
    { name: 'Insight Timer',                     url: 'https://insighttimer.com/',                                platform: 'app',       description: 'World\'s largest free meditation library — 200K+ guided meditations, no paywall' },
    { name: 'UCLA Mindful Awareness Research Center', url: 'https://www.uclahealth.org/programs/marc/free-guided-meditations', platform: 'website', description: 'Free research-backed guided meditations from UCLA\'s mindfulness center' },
    { name: 'Waking Up App (Free Access)',       url: 'https://www.wakingup.com/',                                platform: 'app',       description: 'Sam Harris\'s meditation app — full free scholarship available if you email support' },
    { name: 'Tara Brach — Guided Meditations',  url: 'https://www.tarabrach.com/guided-meditations/',             platform: 'website',   description: 'Free guided meditations from renowned meditation teacher and psychologist' },
  ],

  'Train for a 10K Run': [
    { name: 'Hal Higdon 10K Training',           url: 'https://www.halhigdon.com/training/10k-training/',         platform: 'website',   description: 'Free novice-to-advanced 10K plans from the most trusted name in run training' },
    { name: 'Nike Run Club App',                 url: 'https://www.nike.com/nrc-app',                             platform: 'app',       description: 'Free guided audio runs and structured training plans for 10K' },
    { name: 'The Run Experience — 10K',          url: 'https://www.youtube.com/@TheRunExperience',                platform: 'youtube',   description: 'Free 10K training tips, running form, and race-day strategy videos' },
  ],

  'Train for a Half Marathon': [
    { name: 'Hal Higdon Half Marathon Training',  url: 'https://www.halhigdon.com/training/half-marathon-training/', platform: 'website', description: 'Free Novice 1 through Advanced plans — the most-used half marathon plans worldwide' },
    { name: 'Nike Run Club App',                 url: 'https://www.nike.com/nrc-app',                             platform: 'app',       description: 'Free audio-guided half marathon training program with coach support' },
    { name: 'Runner\'s World Beginner Half Plan', url: 'https://www.runnersworld.com/',                           platform: 'website',   description: 'Free training plans and running advice from the most trusted running publication' },
  ],

  'Train for a Marathon': [
    { name: 'Hal Higdon Marathon Training',      url: 'https://www.halhigdon.com/training/marathon-training/',    platform: 'website',   description: 'Free Novice through Advanced 2 plans — the gold standard of marathon training' },
    { name: 'Nike Run Club App',                 url: 'https://www.nike.com/nrc-app',                             platform: 'app',       description: 'Free 18-week marathon program with audio-guided runs from Nike coaches' },
    { name: 'Strength Running — Jason Fitzgerald', url: 'https://strengthrunning.com/',                           platform: 'website',   description: 'Free marathon plans, injury prevention, and strength training for runners' },
  ],

  'Learn to Swim': [
    { name: 'SwimUp — Beginner Swimming',        url: 'https://www.youtube.com/@swimup',                          platform: 'youtube',   description: 'Step-by-step adult beginner swimming lessons with clear underwater footage' },
    { name: 'Global Triathlon Network — Swim',   url: 'https://www.youtube.com/@gaborone',                        platform: 'youtube',   description: 'Free swim technique videos with drills for every stroke' },
    { name: 'Effortless Swimming',               url: 'https://www.youtube.com/@EffortlessSwimming',              platform: 'youtube',   description: 'Free technique analysis and drill videos for adult swimmers' },
  ],

  'Basic Rock Climbing': [
    { name: 'Movement for Climbers',             url: 'https://www.youtube.com/@MovementForClimbers',             platform: 'youtube',   description: 'Free technique, training, and movement analysis for beginning climbers' },
    { name: 'Mani the Monkey',                   url: 'https://www.youtube.com/@ManiTheMonkey',                   platform: 'youtube',   description: 'Beginner climbing technique tips, training advice, and gear guides' },
    { name: 'REI Expert Advice — Climbing',      url: 'https://www.rei.com/learn/expert-advice/rock-climbing.html', platform: 'website', description: 'Free comprehensive guides on gear, technique, and getting started' },
  ],

  'Learn to Surf': [
    { name: 'Barefoot Surf',                     url: 'https://www.youtube.com/@BarefootSurf',                    platform: 'youtube',   description: 'Detailed beginner surf tutorials — pop-up technique, wave selection, etiquette' },
    { name: 'Kale Brock — Surf Simply',          url: 'https://www.youtube.com/@KaleBrock',                       platform: 'youtube',   description: 'Surf technique breakdowns with slow-motion analysis' },
    { name: 'Surfline',                          url: 'https://www.surfline.com/',                                platform: 'app',       description: 'Free surf forecasts and conditions — essential tool for planning sessions' },
  ],

  'Beginner Weightlifting': [
    { name: 'Jeff Nippard — Fundamentals Series', url: 'https://www.youtube.com/@JeffNippard',                    platform: 'youtube',   description: 'Science-based lifting tutorials with perfect form demonstrations' },
    { name: 'AthleanX — Jeff Cavaliere',         url: 'https://www.youtube.com/@ataborealx',                      platform: 'youtube',   description: 'Physical therapist and trainer — injury-proof form guides for every major lift' },
    { name: 'Stronger By Science',               url: 'https://www.strongerbyscience.com/',                       platform: 'website',   description: 'Free evidence-based training guides and beginner programs' },
    { name: 'DAREBEE',                           url: 'https://darebee.com/',                                     platform: 'website',   description: 'Hundreds of free illustrated workout programs — no equipment needed to start' },
  ],

  'Learn Pilates': [
    { name: 'Blogilates — Cassey Ho',            url: 'https://www.youtube.com/@blogilates',                      platform: 'youtube',   description: '7M+ subscribers — free Pilates workouts with monthly calendars and challenges' },
    { name: 'Move With Nicole',                  url: 'https://www.youtube.com/@MoveWithNicole',                  platform: 'youtube',   description: 'Free Pilates for beginners — slow, clear instruction for at-home practice' },
    { name: 'Jessica Valant Pilates',            url: 'https://www.youtube.com/@JessicaValantPilates',            platform: 'youtube',   description: 'Physical therapist teaching Pilates for rehab, flexibility, and strength' },
  ],

  'Beginner Cycling': [
    { name: 'GCN — Global Cycling Network',      url: 'https://www.youtube.com/@gcn',                             platform: 'youtube',   description: 'The largest cycling YouTube channel — beginner guides, bike fit, training tips' },
    { name: 'GCN Training',                      url: 'https://www.youtube.com/@gcntraining',                     platform: 'youtube',   description: 'Free structured training plans and workout videos for cycling' },
    { name: 'TrainerRoad Blog',                  url: 'https://www.trainerroad.com/blog/',                        platform: 'website',   description: 'Free training science articles and beginner cycling guides' },
  ],

  'Martial Arts Basics': [
    { name: 'fightTIPS — Shane Fazen',           url: 'https://www.youtube.com/@faborealightTIPS',                platform: 'youtube',   description: 'Self-defense and martial arts fundamentals with clear striking technique' },
    { name: 'Ginger Ninja Trickster',            url: 'https://www.youtube.com/@GingerNinjaTrickster',            platform: 'youtube',   description: 'MMA and martial arts tutorials covering all major striking and grappling styles' },
    { name: 'Kwonkicker',                        url: 'https://www.youtube.com/@kwonkicker',                      platform: 'youtube',   description: 'Taekwondo and kickboxing tutorials with step-by-step technique breakdowns' },
  ],

  // ══════════════════════════════════════════════════════════════════════════
  //  CREATIVE  (15 skills)  — verified via web research
  // ══════════════════════════════════════════════════════════════════════════

  'Beginner Drawing': [
    { name: 'Drawabox (Lessons 0-7)',            url: 'https://drawabox.com/',                                    platform: 'website',   description: 'The gold standard free drawing fundamentals curriculum — line control, perspective, 3D form' },
    { name: 'Proko — Drawing Basics',            url: 'https://www.youtube.com/playlist?list=PLtG4P3lq8RHHMNwxuVk0IcGRtPGHi4vN9', platform: 'youtube', description: 'Stan Prokopenko teaches drawing basics with humor — perfect before his anatomy series' },
    { name: 'Ctrl+Paint — Free Video Library',   url: 'https://www.ctrlpaint.com/library',                        platform: 'website',   description: 'Hundreds of bite-sized videos bridging traditional drawing into digital techniques' },
    { name: 'Line of Action',                    url: 'https://line-of-action.com/',                              platform: 'tool',      description: 'Free timed gesture drawing tool used by 500K+ artists — simulates live figure drawing' },
  ],

  'Beginner Watercolor': [
    { name: 'Makoccino',                         url: 'https://www.youtube.com/@makoccino',                       platform: 'youtube',   description: 'One of the most popular watercolor channels — supplies, techniques, and full tutorials' },
    { name: 'Louise De Masi',                    url: 'https://www.youtube.com/@LouiseDeMasi',                    platform: 'youtube',   description: 'Professional watercolorist with a dedicated beginner tips playlist' },
    { name: 'Maria Raczynska',                   url: 'https://www.youtube.com/@MariaRaczynska',                  platform: 'youtube',   description: '380K+ subscribers and 1,000+ videos from basic washes to complete paintings' },
  ],

  'Cook 10 New Dishes': [
    { name: 'Basics with Babish',                url: 'https://www.youtube.com/@basicswithbabish',                platform: 'youtube',   description: 'Designed to teach cooking from scratch — knife work, sauces, then full dishes' },
    { name: 'Chef John — Food Wishes',           url: 'https://www.youtube.com/@foodwishes',                      platform: 'youtube',   description: '1,900+ foolproof recipes over 15 years with a signature calm teaching style' },
    { name: 'Joshua Weissman',                   url: 'https://www.youtube.com/@JoshuaWeissman',                  platform: 'youtube',   description: '10M+ subscribers — "But Better" and "But Cheaper" series teach technique entertainingly' },
    { name: 'BBC Good Food',                     url: 'https://www.bbcgoodfood.com/',                             platform: 'website',   description: 'Thousands of free recipes with technique guides and skill-level ratings' },
  ],

  'Basic Photography': [
    { name: 'Tony & Chelsea Northrup',           url: 'https://www.youtube.com/@TonyAndChelsea',                  platform: 'youtube',   description: 'The most-followed photography channel — tutorials, gear reviews, portfolio critiques' },
    { name: 'Peter McKinnon',                    url: 'https://www.youtube.com/@PeterMcKinnon',                   platform: 'youtube',   description: 'Engaging tutorials on camera gear, shooting techniques, and editing for beginners' },
    { name: 'Mango Street',                      url: 'https://www.youtube.com/@MangoStreet',                     platform: 'youtube',   description: 'Concise tutorials — posing tips, common mistakes, photo challenges, editing walkthroughs' },
  ],

  'Beginner Knitting': [
    { name: 'VeryPink Knits — Staci Perry',      url: 'https://www.youtube.com/@verypinkknits',                   platform: 'youtube',   description: 'Clear, concise tutorials from beginner stitches through advanced techniques' },
    { name: 'Studio Knit',                       url: 'https://www.youtube.com/@StudioKnit',                      platform: 'youtube',   description: 'Beautiful studio-produced tutorials with step-by-step guidance for beginners' },
    { name: 'HappyBerry Knitting',              url: 'https://www.youtube.com/@HappyBerryKnitting',              platform: 'youtube',   description: 'Dedicated absolute-beginner playlist from basic stitches to full projects' },
  ],

  'Beginner Oil Painting': [
    { name: 'Paint Coach — Chris Fornataro',     url: 'https://www.youtube.com/@PaintCoach',                      platform: 'youtube',   description: '500K+ subscribers — simplifies oil painting fundamentals with clear value-study demos' },
    { name: 'Bob Ross — The Joy of Painting',    url: 'https://www.youtube.com/@BobRoss',                         platform: 'youtube',   description: 'Timeless wet-on-wet technique — full episodes free on YouTube, the classic gateway' },
    { name: 'Florent Farges',                    url: 'https://www.youtube.com/@FlorentFargesarts',               platform: 'youtube',   description: '420K+ subscribers — classical atelier method with dynamic plein-air lessons' },
  ],

  'Beginner Calligraphy': [
    { name: 'Lettering Daily — Beginner Guide',  url: 'https://www.lettering-daily.com/calligraphy-for-beginners/', platform: 'website', description: 'Ultimate free guide with step-by-step tutorials and downloadable practice sheets' },
    { name: 'The Postman\'s Knock — Free Worksheets', url: 'https://thepostmansknock.com/all-of-tpks-free-calligraphy-worksheets-a-master-list/', platform: 'website', description: 'Master list of free practice worksheets — pointed pen, brush pen, faux calligraphy' },
    { name: 'Loveleigh Loops',                   url: 'https://loveleighloops.com/blog/modern-calligraphy/',      platform: 'website',   description: 'Free printable worksheets for modern calligraphy used by 25,000+ students' },
  ],

  'Learn Origami': [
    { name: 'Jo Nakashima',                      url: 'https://www.youtube.com/@jonakashima',                     platform: 'youtube',   description: 'High-quality tutorials from simple to complex with step-by-step illustrations overlaid' },
    { name: 'Origami.me',                        url: 'https://origami.me/',                                      platform: 'website',   description: '120+ free projects with diagrams, videos, and difficulty ratings' },
    { name: 'HTQuyet Origami',                   url: 'https://www.youtube.com/@HTQuyet',                         platform: 'youtube',   description: 'Best channel for absolute beginners — slow, deliberate tutorial rhythm' },
  ],

  'Beginner Pottery': [
    { name: 'Ingleton Pottery',                  url: 'https://www.youtube.com/@IngletonPottery',                 platform: 'youtube',   description: 'Full process tutorials covering porcelain, stoneware, and other clay types' },
    { name: 'Matt Horne Pottery',                url: 'https://www.youtube.com/@MattHornePottery',                platform: 'youtube',   description: 'Wide range of styles including crystalline pottery with detailed beginner tutorials' },
    { name: 'Earth Nation Ceramics',             url: 'https://www.youtube.com/@EarthNationCeramics',             platform: 'youtube',   description: 'Hand-building and wheel-throwing tutorials with accessible beginner instruction' },
  ],

  'Learn Sewing': [
    { name: 'Professor Pincushion',              url: 'https://www.youtube.com/@ProfessorPincushion',             platform: 'youtube',   description: '500+ videos with close-ups — 120+ tutorials for beginners on machine setup and techniques' },
    { name: 'Made to Sew',                       url: 'https://www.youtube.com/@MadeToSew',                       platform: 'youtube',   description: '150+ videos with clear step-by-step tutorials from threading to complete garments' },
    { name: 'SewVeryEasy',                       url: 'https://www.youtube.com/@SewVeryEasy',                     platform: 'youtube',   description: 'Fun, simple projects that build skills progressively with tips and tricks' },
  ],

  'Beginner Woodworking': [
    { name: 'Steve Ramsey — Woodworking for Mere Mortals', url: 'https://www.youtube.com/@stevinmarin',           platform: 'youtube',   description: 'THE beginner woodworking channel — practical projects without expensive tools' },
    { name: 'The Wood Whisperer',                url: 'https://www.youtube.com/@TheWoodWhisperer',                platform: 'youtube',   description: 'Education, project builds, and a dedicated "Woodworking Basics" playlist' },
    { name: 'I Like to Make Stuff',              url: 'https://www.youtube.com/@Iliketomakestuff',                platform: 'youtube',   description: '"Maker 101" series covering basic skills — perfect for first-timers' },
  ],

  'Learn Candle Making': [
    { name: 'CandleScience',                     url: 'https://www.candlescience.com/candle-making-videos/',      platform: 'website',   description: 'Industry-leading tutorials on fragrance oils, wax types, and testing' },
    { name: 'Standley Handcrafted',              url: 'https://www.youtube.com/@StandleyHandcrafted',             platform: 'youtube',   description: '117K subscribers with detailed soy, beeswax, and container candle tutorials' },
    { name: 'Bramble Berry',                     url: 'https://www.youtube.com/@BrambleBerry',                    platform: 'youtube',   description: '500K+ subscribers — teaches making and properly testing candles' },
  ],

  'Digital Art Basics': [
    { name: 'Krita (Free Software)',             url: 'https://krita.org/en/',                                    platform: 'app',       description: 'Completely free, open-source digital painting software — rivals Photoshop for art' },
    { name: 'Krita Official Tutorials',          url: 'https://docs.krita.org/en/tutorials.html',                 platform: 'website',   description: 'Official docs covering getting started, brushes, layers, and techniques' },
    { name: 'Ctrl+Paint — Free Video Library',   url: 'https://www.ctrlpaint.com/library',                        platform: 'website',   description: 'Structured free video library bridging traditional art fundamentals into digital' },
  ],

  'Learn Crochet': [
    { name: 'Bella Coco',                        url: 'https://www.youtube.com/@BellaCoco',                       platform: 'youtube',   description: 'Dedicated "Absolute Beginner\'s Playlist" covering slip knots through full projects' },
    { name: 'HappyBerry Crochet',               url: 'https://www.youtube.com/@HappyBerryCrochet',               platform: 'youtube',   description: '11-video beginner series walking through every foundational stitch' },
    { name: 'The Crochet Crowd',                 url: 'https://www.youtube.com/@TheCrochetCrowd',                 platform: 'youtube',   description: 'Treasure trove of free tutorials with an encouraging community' },
    { name: 'AllFreeCrochet',                    url: 'https://www.allfreecrochet.com/',                          platform: 'website',   description: '10,000+ free patterns, video tutorials organized by skill level' },
  ],

  'Beginner Embroidery': [
    { name: 'Sarah Homfray Embroidery',          url: 'https://www.youtube.com/@sarahhomfray',                    platform: 'youtube',   description: 'High-quality tutorials covering hand embroidery, goldwork, crewelwork, and more' },
    { name: 'Needle \'n Thread — Mary Corbet',   url: 'https://www.needlenthread.com/',                           platform: 'website',   description: 'An embroidery encyclopedia — incredible archive of free patterns and stitch tutorials' },
    { name: 'Cutesy Crafts',                     url: 'https://www.youtube.com/@CutesyCrafts',                    platform: 'youtube',   description: 'Beginner-friendly embroidery tutorials covering essential stitches' },
  ],

  // ══════════════════════════════════════════════════════════════════════════
  //  BUSINESS  (12 skills)
  // ══════════════════════════════════════════════════════════════════════════

  'Personal Finance Basics': [
    { name: 'Khan Academy — Personal Finance',   url: 'https://www.khanacademy.org/college-careers-more/personal-finance', platform: 'course', description: 'Free structured course covering budgeting, savings, credit, taxes, and insurance' },
    { name: 'Two Cents (PBS)',                   url: 'https://www.youtube.com/@TwoCentsPBS',                     platform: 'youtube',   description: 'Fun, animated personal finance explainers from PBS Digital Studios' },
    { name: 'The Financial Diet',                url: 'https://www.youtube.com/@TheFinancialDiet',                platform: 'youtube',   description: 'Practical money advice for young adults — budgeting, saving, and building wealth' },
    { name: 'Investopedia Personal Finance',     url: 'https://www.investopedia.com/personal-finance-4427760',    platform: 'website',   description: 'Comprehensive free articles on every personal finance topic from budgeting to retirement' },
  ],

  'Investing Basics': [
    { name: 'Khan Academy — Finance & Capital Markets', url: 'https://www.khanacademy.org/economics-finance-domain/core-finance', platform: 'course', description: 'Free lessons on stocks, bonds, interest rates, and portfolio theory' },
    { name: 'Investopedia Investing Essentials', url: 'https://www.investopedia.com/investing-essentials-4689754', platform: 'website',  description: 'The go-to free resource for learning investment terminology and strategies' },
    { name: 'The Plain Bagel',                   url: 'https://www.youtube.com/@ThePlainBagel',                   platform: 'youtube',   description: 'CFA charterholder explaining investing concepts clearly for beginners' },
    { name: 'Ben Felix — Common Sense Investing', url: 'https://www.youtube.com/@BenFelixCSI',                    platform: 'youtube',   description: 'Evidence-based investing education grounded in academic finance research' },
  ],

  'Excel Mastery': [
    { name: 'ExcelIsFun — Mike Girvin',          url: 'https://www.youtube.com/@excelisfun',                      platform: 'youtube',   description: '3,800+ free videos, 100+ playlists — the internet\'s most comprehensive free Excel education' },
    { name: 'Leila Gharani',                     url: 'https://www.youtube.com/@LeilaGharani',                    platform: 'youtube',   description: 'Microsoft MVP with clear Excel tutorials from basics through advanced formulas' },
    { name: 'Excel Easy',                        url: 'https://www.excel-easy.com/',                              platform: 'website',   description: 'Free step-by-step Excel tutorials organized by topic with screenshots' },
    { name: 'Chandoo.org',                       url: 'https://chandoo.org/',                                     platform: 'website',   description: 'Free Excel tips, tutorials, and downloadable templates for all levels' },
  ],

  'Public Speaking': [
    { name: 'Harvard Online — Public Speaking',  url: 'https://pll.harvard.edu/subject/public-speaking',          platform: 'course',    description: 'Free audit-able public speaking courses from Harvard' },
    { name: 'TED Talks — How to Give a TED Talk', url: 'https://www.youtube.com/watch?v=8S0FDjFBj8o',            platform: 'youtube',   description: 'Chris Anderson explains the secret structure of great talks' },
    { name: 'Toastmasters International',        url: 'https://www.toastmasters.org/',                           platform: 'community', description: 'Find a local club for free practice — structured speech projects and feedback' },
    { name: 'Vinh Giang',                        url: 'https://www.youtube.com/@VinhGiang',                       platform: 'youtube',   description: 'Communication coach teaching presence, voice control, and storytelling' },
  ],

  'Copywriting Basics': [
    { name: 'Copyblogger',                       url: 'https://copyblogger.com/',                                 platform: 'website',   description: 'Free articles and guides on copywriting fundamentals — the OG content marketing resource' },
    { name: 'Alex Cattoni',                      url: 'https://www.youtube.com/@AlexCattoni',                     platform: 'youtube',   description: 'Free copywriting tutorials covering headlines, emails, sales pages, and formulas' },
    { name: 'The Futur — Chris Do',              url: 'https://www.youtube.com/@thefutur',                        platform: 'youtube',   description: 'Business of design and copywriting — pricing, pitching, and writing persuasively' },
  ],

  'Social Media Marketing': [
    { name: 'HubSpot Academy — Social Media',    url: 'https://academy.hubspot.com/courses/social-media',         platform: 'course',    description: 'Free comprehensive social media marketing certification course' },
    { name: 'Google Digital Garage',             url: 'https://grow.google/intl/uk/courses-and-tools/',            platform: 'course',    description: 'Free Fundamentals of Digital Marketing course — 40 hours, free certificate for life' },
    { name: 'Later Blog',                        url: 'https://later.com/blog/',                                  platform: 'website',   description: 'Free guides on Instagram, TikTok, LinkedIn strategy and content planning' },
    { name: 'Think Media',                       url: 'https://www.youtube.com/@ThinkMedia',                      platform: 'youtube',   description: 'YouTube growth strategies and social media marketing tips for beginners' },
  ],

  'Freelance Business Basics': [
    { name: 'The Futur — Chris Do',              url: 'https://www.youtube.com/@thefutur',                        platform: 'youtube',   description: 'Free content on pricing, client management, and building a freelance business' },
    { name: 'Mike Monteiro — F*ck You, Pay Me',  url: 'https://www.youtube.com/watch?v=jVkLVRt6c1U',             platform: 'youtube',   description: 'Legendary free talk on contracts, getting paid, and protecting yourself as a freelancer' },
    { name: 'Freelancers Union',                 url: 'https://www.freelancersunion.org/',                        platform: 'community', description: 'Free resources, contracts, and community for independent workers' },
  ],

  'Start a Podcast': [
    { name: 'Pat Flynn — How to Start a Podcast', url: 'https://www.youtube.com/@PatFlynn',                       platform: 'youtube',   description: 'Step-by-step free podcast setup guide from one of podcasting\'s biggest names' },
    { name: 'Buzzsprout Podcast Guide',          url: 'https://www.buzzsprout.com/how-to-make-a-podcast',         platform: 'website',   description: 'Free comprehensive guide covering equipment, recording, editing, and distribution' },
    { name: 'Anchor by Spotify',                 url: 'https://podcasters.spotify.com/',                          platform: 'app',       description: 'Free podcast hosting, recording, and distribution to all major platforms' },
  ],

  'SEO Basics': [
    { name: 'Moz — Beginner\'s Guide to SEO',   url: 'https://moz.com/beginners-guide-to-seo',                   platform: 'website',   description: 'The definitive free SEO guide — comprehensive, regularly updated, industry standard' },
    { name: 'Ahrefs SEO Course for Beginners',   url: 'https://ahrefs.com/academy/seo-training-course',           platform: 'course',    description: 'Free video course from one of the top SEO tool companies' },
    { name: 'Google Search Central',             url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide', platform: 'website', description: 'Google\'s own free SEO starter guide — straight from the source' },
    { name: 'Brian Dean — Backlinko',            url: 'https://backlinko.com/',                                   platform: 'website',   description: 'Free actionable SEO strategies and case studies from a recognized expert' },
  ],

  'Email Marketing Basics': [
    { name: 'Mailchimp Resources',               url: 'https://mailchimp.com/resources/',                         platform: 'website',   description: 'Free guides on email marketing strategy, design, and deliverability' },
    { name: 'HubSpot Email Marketing Course',    url: 'https://academy.hubspot.com/courses/email-marketing',      platform: 'course',    description: 'Free certification course covering strategy, segmentation, and analytics' },
    { name: 'Really Good Emails',                url: 'https://reallygoodemails.com/',                            platform: 'website',   description: 'Free curated gallery of email design inspiration organized by category' },
  ],

  'Negotiation Skills': [
    { name: 'Chris Voss — MasterClass Clips',    url: 'https://www.youtube.com/@ChrisVossNegotiation',            platform: 'youtube',   description: 'Former FBI hostage negotiator sharing tactical empathy and negotiation techniques' },
    { name: 'Harvard PON — Free Resources',      url: 'https://www.pon.harvard.edu/free-reports/',                 platform: 'website',   description: 'Free negotiation reports and articles from Harvard\'s Program on Negotiation' },
    { name: 'Stanford GSB — Negotiation',        url: 'https://www.youtube.com/@stanfordgsb',                     platform: 'youtube',   description: 'Free lectures on negotiation strategy from Stanford Graduate School of Business' },
  ],

  'Leadership Fundamentals': [
    { name: 'Simon Sinek',                       url: 'https://www.youtube.com/@SimonSinek',                      platform: 'youtube',   description: '"Start With Why" — free talks and interviews on leadership, trust, and purpose' },
    { name: 'Harvard Business Review — Leadership', url: 'https://hbr.org/topic/subject/leadership',              platform: 'website',   description: 'Free articles (limited) on leadership strategy from the top business publication' },
    { name: 'Jocko Willink — Jocko Podcast Clips', url: 'https://www.youtube.com/@JockoWillink',                  platform: 'youtube',   description: 'Former Navy SEAL commander on leadership, discipline, and decision-making' },
  ],

  // ══════════════════════════════════════════════════════════════════════════
  //  CULINARY  (10 skills)  — verified via web research
  // ══════════════════════════════════════════════════════════════════════════

  'Bake Sourdough Bread': [
    { name: 'The Perfect Loaf — New Baker Start Here', url: 'https://www.theperfectloaf.com/new-baker-start-here/', platform: 'website', description: 'The go-to sourdough website — gram-precise formulas and full 24-hour workflows' },
    { name: 'The Sourdough Journey',             url: 'https://www.youtube.com/@TheSourdoughJourney',             platform: 'youtube',   description: '50+ hours of free instructional sourdough videos in masterclass format' },
    { name: 'The Bread Code',                    url: 'https://www.youtube.com/@TheBreadCode',                    platform: 'youtube',   description: 'Software-engineer-turned-baker focusing on the science behind sourdough' },
    { name: 'Bake with Jack',                    url: 'https://www.youtube.com/@BakeWithJack',                    platform: 'youtube',   description: 'Professional baker teaching bread baking fundamentals — sourdough from starter to loaf' },
    { name: 'The Fresh Loaf',                    url: 'https://www.thefreshloaf.com/',                            platform: 'community', description: 'Online community for amateur artisan bakers with forums and group bakes' },
  ],

  'Master French Sauces': [
    { name: 'Chef Jean-Pierre',                  url: 'https://www.youtube.com/@ChefJeanPierre',                  platform: 'youtube',   description: '2.3M subscribers — classically trained French chef demystifying all 5 mother sauces' },
    { name: 'French Cooking Academy',            url: 'https://www.youtube.com/channel/UC0lG3Ihe4LGV851lODRIS5g', platform: 'youtube',   description: '750K subscribers — authentic French techniques based on Escoffier\'s methods' },
    { name: 'Basics with Babish — Sauces',       url: 'https://www.youtube.com/@basicswithbabish',                platform: 'youtube',   description: 'Foundational sauce-making as part of cooking fundamentals in beginner-friendly format' },
  ],

  'Sushi Making': [
    { name: 'Secrets of Sushi',                  url: 'https://www.youtube.com/@SecretsSushi',                    platform: 'youtube',   description: 'Real sushi chef teaching in-depth home sushi making plus the science of ingredients' },
    { name: 'The Sushi Man',                     url: 'https://www.youtube.com/c/TheSushiMan',                    platform: 'youtube',   description: '20+ years of Japanese cuisine experience with authentic techniques for home cooks' },
    { name: 'How To Sushi',                      url: 'https://www.youtube.com/@HowToSushi',                      platform: 'youtube',   description: 'Focused on sushi techniques, Japanese culinary history, and practical recipes' },
  ],

  'Pasta from Scratch': [
    { name: 'Pasta Grannies',                    url: 'https://www.youtube.com/channel/UCedsqpl7jaIb8BiaUFuC9KQ', platform: 'youtube',   description: '1M+ subscribers watching real Italian grandmothers make traditional handmade pasta' },
    { name: 'Joshua Weissman — Homemade Pasta',  url: 'https://www.joshuaweissman.com/recipes/best-classic-homemade-pasta-recipes', platform: 'website', description: 'Detailed guide to pasta dough and 4 shapes with matching sauces' },
    { name: 'Sip and Feast',                     url: 'https://www.youtube.com/@SipandFeast',                     platform: 'youtube',   description: 'Hearty, rustic Italian dishes specializing in pasta and traditional sauces' },
  ],

  'Cake Decorating': [
    { name: 'How To Cake It — Yolanda Gampp',    url: 'https://www.youtube.com/channel/UCvM1hVcRJmVWDtATYarC0KA', platform: 'youtube', description: '4M subscribers — complete A-Z process from recipes through novelty cake decoration' },
    { name: 'Cakes by Lynz',                     url: 'https://cakesbylynz.com/',                                 platform: 'website',   description: '200+ free videos covering tutorials, toppers, sugar flowers, and tiered cakes' },
    { name: 'Caketastic Cakes',                  url: 'https://www.youtube.com/@CaketasticCakes',                 platform: 'youtube',   description: 'Narrated beginner tutorials using just basic tools with step-by-step instructions' },
  ],

  'Knife Skills': [
    { name: 'Epicurious — 9 Essential Knife Skills', url: 'https://www.youtube.com/watch?v=YrHpeEwk_-U',         platform: 'youtube',   description: 'Comprehensive single-video masterclass covering all 9 essential knife cuts' },
    { name: 'Basics with Babish',                url: 'https://www.youtube.com/@basicswithbabish',                platform: 'youtube',   description: 'Knife skills covered as the foundation of the cooking fundamentals curriculum' },
    { name: 'Internet Shaquille',                url: 'https://www.youtube.com/@InternetShaquille',               platform: 'youtube',   description: 'Relaxed, no-frills approach with practical knife skills and technique tips' },
    { name: 'Adam Ragusea',                      url: 'https://www.youtube.com/@aragusea',                        platform: 'youtube',   description: 'Blends food science with technique — makes knife skills logical and accessible' },
  ],

  'Meal Prep Mastery': [
    { name: 'Fit Men Cook — Kevin Curry',        url: 'https://www.youtube.com/@FitMenCook',                      platform: 'youtube',   description: 'Budget-friendly meal prep with allergy-friendly and vegan swaps' },
    { name: 'Rainbow Plant Life',                url: 'https://www.youtube.com/@RainbowPlantLife',                platform: 'youtube',   description: 'Vibrant vegan recipes with smart meal planning and budgeting strategies' },
    { name: 'Tasty',                             url: 'https://www.youtube.com/@tasty',                           platform: 'youtube',   description: 'Quick, easy everyday recipes with an extensive meal prep compilation library' },
  ],

  'Learn to BBQ': [
    { name: 'HowToBBQRight — Malcom Reed',       url: 'https://www.youtube.com/@HowToBBQRight',                   platform: 'youtube',   description: 'Weekly uploads of BBQ classics under 10 minutes — ribs, burnt ends, burgers' },
    { name: 'BBQ Pit Boys',                      url: 'https://www.youtube.com/@BBQPitBoys',                      platform: 'youtube',   description: 'YouTube\'s #1 BBQ channel with 1,000+ instructional recipe videos' },
    { name: 'Mad Scientist BBQ',                 url: 'https://www.youtube.com/@MadScientistBBQ',                 platform: 'youtube',   description: 'Easy-to-follow recipes for pulled pork, ribs, and brisket at all levels' },
  ],

  'Fermentation Basics': [
    { name: 'Pro Home Cooks',                    url: 'https://www.youtube.com/@ProHomeCooks',                    platform: 'youtube',   description: '"The Most Helpful Fermentation Guide on the Internet" — teaches principles, not just recipes' },
    { name: 'Brad Leone — It\'s Alive (Bon Appetit)', url: 'https://www.youtube.com/playlist?list=PLKtIunYVkv_SUyXj_6Fe53okfzM9yVq1F', platform: 'youtube', description: 'Entertaining fermentation series covering hot sauce, sauerkraut, kombucha, and more' },
    { name: 'Wild Fermentation — Sandor Katz',   url: 'https://www.wildfermentation.com/',                        platform: 'website',   description: 'Website of the godfather of fermentation revival — free blog posts and instructional videos' },
  ],

  'Wine Basics': [
    { name: 'Wine Folly — Wine 101',             url: 'https://winefolly.com/wine-basics-beginners-guide/',       platform: 'website',   description: 'Beautifully designed free guide covering 9 styles, tasting technique, and food pairing' },
    { name: 'Wine With Jimmy',                   url: 'https://www.youtube.com/@WineWithJimmy',                   platform: 'youtube',   description: 'WSET tutor with approachable explanations of regions, grapes, and tasting' },
    { name: 'WSET — 3 Minute Wine School',       url: 'https://www.youtube.com/@WSETglobal',                      platform: 'youtube',   description: 'Short free videos on classic wine regions from world-class experts' },
  ],

  // ══════════════════════════════════════════════════════════════════════════
  //  MIND  (10 skills)
  // ══════════════════════════════════════════════════════════════════════════

  'Speed Reading': [
    { name: 'Jim Kwik — Speed Reading Tips',     url: 'https://www.youtube.com/@JimKwik',                         platform: 'youtube',   description: 'Brain coach with free speed reading techniques, memory tips, and learning strategies' },
    { name: 'College Info Geek — Speed Reading',  url: 'https://www.youtube.com/@CIG',                            platform: 'youtube',   description: 'Evidence-based speed reading techniques that actually work, debunking myths' },
    { name: 'Spreeder',                          url: 'https://www.spreeder.com/',                                platform: 'tool',      description: 'Free online speed reading tool — paste text and practice with guided pacing' },
  ],

  'Memory Palace Technique': [
    { name: 'Nelson Dellis — Memory Champion',   url: 'https://www.youtube.com/@NelsonDellis',                    platform: 'youtube',   description: '4x USA Memory Champion teaching the memory palace technique step-by-step' },
    { name: 'Art of Memory',                     url: 'https://artofmemory.com/',                                 platform: 'website',   description: 'Free guides, community forum, and tools for learning memory techniques' },
    { name: 'Mullen Memory',                     url: 'https://www.youtube.com/@MullenMemory',                    platform: 'youtube',   description: 'Practical memory technique tutorials with real-world applications' },
  ],

  'Learn Chess': [
    { name: 'Chess.com — Learn',                 url: 'https://www.chess.com/learn-how-to-play-chess',            platform: 'website',   description: 'Interactive free lessons from beginner to advanced with puzzles and play' },
    { name: 'Lichess.org — Learn',               url: 'https://lichess.org/learn',                                platform: 'website',   description: 'Completely free and open-source — interactive tutorials, puzzles, and live play' },
    { name: 'GothamChess — Levy Rozman',         url: 'https://www.youtube.com/@GothamChess',                     platform: 'youtube',   description: 'The most popular chess YouTube channel — engaging lessons from openings to endgames' },
    { name: 'Daniel Naroditsky — Speedrun Series', url: 'https://www.youtube.com/@DanielNaroditskyGM',            platform: 'youtube',   description: 'GM explains every move from rating 0 upward — the best free chess improvement series' },
  ],

  'Learn to Type Fast': [
    { name: 'TypingClub',                        url: 'https://www.typingclub.com/',                              platform: 'tool',      description: 'Gamified typing lessons with achievements, badges, and progress tracking' },
    { name: 'Keybr.com',                         url: 'https://www.keybr.com/',                                   platform: 'tool',      description: 'Smart algorithm identifies your weakest keys and generates targeted practice' },
    { name: 'Typing.com',                        url: 'https://www.typing.com/',                                  platform: 'tool',      description: 'World\'s most popular free typing program with lessons, tests, and games' },
    { name: 'Monkeytype',                        url: 'https://monkeytype.com/',                                  platform: 'tool',      description: 'Beautiful minimalist typing test — the gold standard with detailed statistics' },
  ],

  'Logic & Critical Thinking': [
    { name: 'Khan Academy — Computing',          url: 'https://www.khanacademy.org/computing',                    platform: 'course',    description: 'Free lessons on logical thinking, algorithms, and computational problem-solving' },
    { name: 'Crash Course — Philosophy',         url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtNgK6MZucdYldNkMybYIHKR', platform: 'youtube', description: 'Free video series covering formal logic, fallacies, and critical thinking' },
    { name: 'Brilliant (Free Tier)',             url: 'https://brilliant.org/',                                   platform: 'app',       description: 'Interactive logic and math puzzles — free tier gives daily challenges' },
  ],

  'Philosophy Basics': [
    { name: 'Crash Course — Philosophy',         url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtNgK6MZucdYldNkMybYIHKR', platform: 'youtube', description: '46 free episodes covering major philosophical concepts from ethics to epistemology' },
    { name: 'PhilosophyTube — Abigail Thorn',   url: 'https://www.youtube.com/@PhilosophyTube',                   platform: 'youtube',   description: 'Engaging, production-quality philosophy videos making complex ideas accessible' },
    { name: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/',                            platform: 'website',   description: 'The most authoritative free philosophy reference — peer-reviewed academic articles' },
    { name: 'The School of Life',                url: 'https://www.youtube.com/@theschooloflife',                  platform: 'youtube',   description: 'Animated philosophy explainers on thinkers from Plato to Nietzsche' },
  ],

  'Learn Stoicism': [
    { name: 'Einzelganger',                      url: 'https://www.youtube.com/@Einzelganger',                    platform: 'youtube',   description: 'Deep, well-produced videos on Stoic philosophy and practical applications' },
    { name: 'Daily Stoic — Ryan Holiday',        url: 'https://www.youtube.com/@DailyStoic',                      platform: 'youtube',   description: 'Daily Stoic wisdom and practical philosophy for modern life' },
    { name: 'The Internet Classics Archive — Meditations', url: 'http://classics.mit.edu/Antoninus/meditations.html', platform: 'book', description: 'Marcus Aurelius\' Meditations — free full text from MIT' },
    { name: 'The Internet Classics Archive — Enchiridion', url: 'http://classics.mit.edu/Epictetus/epicench.html', platform: 'book',     description: 'Epictetus\' Handbook of Stoic philosophy — free full text from MIT' },
  ],

  'Cognitive Behavioral Techniques': [
    { name: 'Therapy in a Nutshell',             url: 'https://www.youtube.com/@TherapyinaNutshell',              platform: 'youtube',   description: 'Licensed therapist teaching CBT techniques, thought records, and coping skills' },
    { name: 'Dr. Tracey Marks',                  url: 'https://www.youtube.com/@DrTraceyMarks',                   platform: 'youtube',   description: 'Psychiatrist explaining CBT, anxiety management, and mental health fundamentals' },
    { name: 'Centre for Clinical Interventions', url: 'https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself', platform: 'website', description: 'Free CBT-based self-help workbooks for anxiety, depression, and more' },
  ],

  'Mental Math Mastery': [
    { name: 'tecmath',                           url: 'https://www.youtube.com/@tecmath',                         platform: 'youtube',   description: 'Popular channel with mental math tricks, shortcuts, and speed calculation techniques' },
    { name: 'MathAntics',                        url: 'https://www.youtube.com/@mathantics',                      platform: 'youtube',   description: 'Clear, animated math tutorials covering arithmetic and mental calculation strategies' },
    { name: 'Mathway',                           url: 'https://www.mathway.com/',                                 platform: 'tool',      description: 'Free problem solver to check your mental math — practice and verify answers' },
  ],

  'Habit Building Science': [
    { name: 'James Clear — Atomic Habits (Blog)', url: 'https://jamesclear.com/articles',                         platform: 'website',   description: 'Free articles distilling the core habit-formation science from Atomic Habits' },
    { name: 'Andrew Huberman — Habits Episode',  url: 'https://www.youtube.com/@hubaborealermanlab',              platform: 'youtube',   description: 'Neuroscientist explaining the science of habit formation and dopamine systems' },
    { name: 'CGP Grey — Spaceship You',          url: 'https://www.youtube.com/watch?v=snAhsXyO3Ck',             platform: 'youtube',   description: 'Brilliant animated video on building routines and maintaining productivity' },
  ],

  // ══════════════════════════════════════════════════════════════════════════
  //  DIY  (10 skills)
  // ══════════════════════════════════════════════════════════════════════════

  'Basic Home Repairs': [
    { name: 'Home Mender — Dustin',              url: 'https://www.youtube.com/@HomeMender',                      platform: 'youtube',   description: 'Fix-it videos for real homeowner problems — drywall, doors, faucets, painting' },
    { name: 'See Jane Drill',                    url: 'https://www.youtube.com/@SeeJaneDrill',                    platform: 'youtube',   description: 'Home repair tutorials designed for beginners with clear, patient instruction' },
    { name: 'This Old House',                    url: 'https://www.youtube.com/@ThisOldHouse',                    platform: 'youtube',   description: 'The classic home improvement show — free on YouTube with expert-level repair guides' },
    { name: 'Family Handyman',                   url: 'https://www.familyhandyman.com/',                          platform: 'website',   description: 'Free how-to guides for every common home repair with photos and step-by-step' },
  ],

  'Electrical Basics': [
    { name: 'Electrician U',                     url: 'https://www.youtube.com/@ElectricianU',                    platform: 'youtube',   description: 'Licensed electrician teaching home electrical basics safely and clearly' },
    { name: 'How to Home',                       url: 'https://www.youtube.com/@HowToHome',                       platform: 'youtube',   description: 'DIY electrical tutorials — outlets, switches, fixtures for homeowners' },
    { name: 'Family Handyman — Electrical',      url: 'https://www.familyhandyman.com/electrical/',               platform: 'website',   description: 'Free guides on home electrical projects with safety warnings and code tips' },
  ],

  'Basic Plumbing': [
    { name: 'Roger Wakefield',                   url: 'https://www.youtube.com/@RogerWakefield',                  platform: 'youtube',   description: 'Licensed plumber with clear DIY tutorials — drains, toilets, faucets, water heaters' },
    { name: 'This Old House — Plumbing',         url: 'https://www.youtube.com/@ThisOldHouse',                    platform: 'youtube',   description: 'Expert plumbing tutorials from the longest-running home improvement show' },
    { name: 'Got2Learn',                         url: 'https://www.youtube.com/@Got2Learn',                       platform: 'youtube',   description: 'Practical plumbing tutorials for homeowners with tips from a real plumber' },
  ],

  'Build a Bookshelf': [
    { name: 'Steve Ramsey — Woodworking for Mere Mortals', url: 'https://www.youtube.com/@stevinmarin',           platform: 'youtube',   description: 'Beginner woodworking projects without expensive tools — multiple bookshelf builds' },
    { name: 'Ana White',                         url: 'https://www.ana-white.com/',                               platform: 'website',   description: 'Free furniture plans with cut lists, materials, and step-by-step instructions' },
    { name: 'Fix This Build That',               url: 'https://www.youtube.com/@Fixthisbuildthat',                platform: 'youtube',   description: 'Beginner-friendly furniture builds with detailed plans and techniques' },
  ],

  'Learn 3D Printing': [
    { name: 'Teaching Tech',                     url: 'https://www.youtube.com/@TeachingTech',                    platform: 'youtube',   description: 'The best beginner 3D printing channel — calibration guides, reviews, and tutorials' },
    { name: 'Makers Muse',                       url: 'https://www.youtube.com/@MakersMuse',                      platform: 'youtube',   description: '3D printing tutorials, design tips, and troubleshooting for all levels' },
    { name: 'Thingiverse',                       url: 'https://www.thingiverse.com/',                             platform: 'community', description: 'Massive free library of downloadable 3D models ready to print' },
    { name: 'TinkerCAD',                         url: 'https://www.tinkercad.com/',                               platform: 'tool',      description: 'Free browser-based 3D modeling tool — perfect for beginners to design printable objects' },
  ],

  'Basic Gardening': [
    { name: 'Epic Gardening — Kevin Espiritu',   url: 'https://www.youtube.com/@epicgardening',                   platform: 'youtube',   description: 'The most comprehensive gardening channel — accessible for any space, climate, or experience' },
    { name: 'MIgardener',                        url: 'https://www.youtube.com/@MIgardener',                      platform: 'youtube',   description: 'Beginner vegetable gardening on a budget — $1 seed packets and simple techniques' },
    { name: 'The Old Farmer\'s Almanac',         url: 'https://www.almanac.com/gardening',                        platform: 'website',   description: 'Free planting guides, frost dates, growing calendars, and pest identification' },
    { name: 'Savvy Gardening',                   url: 'https://savvygardening.com/',                              platform: 'website',   description: 'Free articles on garden planning, raised beds, composting, and seasonal tips' },
  ],

  'Soap Making': [
    { name: 'Royalty Soaps — Katie Carson',       url: 'https://www.youtube.com/@RoyaltySoaps',                    platform: 'youtube',   description: 'Beautiful cold-process soap tutorials with detailed technique and recipe breakdowns' },
    { name: 'Bramble Berry',                     url: 'https://www.youtube.com/@BrambleBerry',                    platform: 'youtube',   description: '500K+ subscribers — comprehensive soap-making tutorials plus testing and safety' },
    { name: 'Soap Queen (Blog)',                 url: 'https://www.soapqueen.com/',                               platform: 'website',   description: 'Free cold process, melt & pour, and hot process soap tutorials with recipes' },
  ],

  'Leatherworking Basics': [
    { name: 'Corter Leather',                    url: 'https://www.youtube.com/@CorterLeather',                   platform: 'youtube',   description: 'High-quality leather craft tutorials from a professional leatherworker' },
    { name: 'Ian Atkinson — Leathercraft',       url: 'https://www.youtube.com/@IanAtkinson',                     platform: 'youtube',   description: 'Detailed leatherworking tutorials — tooling, stitching, edge finishing, and project builds' },
    { name: 'Weaver Leather Supply',             url: 'https://www.youtube.com/@WeaverLeatherSupply',             platform: 'youtube',   description: 'Beginner leathercraft tutorials with tool guides and starter project ideas' },
  ],

  'Jewelry Making': [
    { name: 'Beadaholique',                      url: 'https://www.youtube.com/@Beadaholique',                    platform: 'youtube',   description: 'Massive library of free jewelry-making tutorials from basic stringing to advanced wirework' },
    { name: 'The Spruce Crafts — Jewelry',       url: 'https://www.thesprucecrafts.com/jewelry-making-4162894',   platform: 'website',   description: 'Free beginner tutorials with supply lists, techniques, and project ideas' },
    { name: 'PotomacBeads',                      url: 'https://www.youtube.com/@PotomacBeads',                    platform: 'youtube',   description: 'Free beading and jewelry tutorials with clear step-by-step instruction' },
  ],

  'Screen Printing': [
    { name: 'Catspit Productions',               url: 'https://www.youtube.com/@catspitscreenprinting',           platform: 'youtube',   description: 'The most comprehensive free screen printing education channel on YouTube' },
    { name: 'Ryonet (ScreenPrinting.com)',       url: 'https://www.youtube.com/@Ryonet',                          platform: 'youtube',   description: 'Free tutorials from the leading screen printing equipment supplier' },
    { name: 'Mikey Designs & Silk Screen',       url: 'https://www.youtube.com/@MikeyDesigns',                    platform: 'youtube',   description: 'Budget-friendly screen printing tutorials for home and small business' },
  ],

  // ══════════════════════════════════════════════════════════════════════════
  //  WELLNESS  (8 skills)
  // ══════════════════════════════════════════════════════════════════════════

  'Sleep Optimization': [
    { name: 'Andrew Huberman — Sleep Toolkit',   url: 'https://www.youtube.com/@hubermanlab',                     platform: 'youtube',   description: 'Stanford neuroscientist with a complete free sleep optimization protocol' },
    { name: 'Matthew Walker — Why We Sleep Talks', url: 'https://www.youtube.com/watch?v=5MuIMqhT8DM',            platform: 'youtube',   description: 'World\'s leading sleep researcher explaining sleep science and practical tips' },
    { name: 'Sleep Foundation',                  url: 'https://www.sleepfoundation.org/',                         platform: 'website',   description: 'Evidence-based free guides on sleep hygiene, mattresses, and sleep disorders' },
  ],

  'Build a Morning Routine': [
    { name: 'Ali Abdaal — Morning Routine',      url: 'https://www.youtube.com/@aliabdaal',                       platform: 'youtube',   description: 'Productivity-focused morning routine advice grounded in evidence and experimentation' },
    { name: 'Thomas Frank',                      url: 'https://www.youtube.com/@Thomasfrank',                     platform: 'youtube',   description: 'Practical productivity systems including morning routines and habit stacking' },
    { name: 'James Clear — Morning Habits',      url: 'https://jamesclear.com/articles',                          platform: 'website',   description: 'Free articles on building morning routines using the Atomic Habits framework' },
  ],

  'Digital Detox Protocol': [
    { name: 'Cal Newport — Deep Work Talks',     url: 'https://www.youtube.com/@CalNewportMedia',                 platform: 'youtube',   description: 'Author of Digital Minimalism — free talks on reducing screen time and deep focus' },
    { name: 'Center for Humane Technology',      url: 'https://www.humanetech.com/youth/digital-wellness',        platform: 'website',   description: 'Free resources on understanding and reducing technology\'s hold on attention' },
    { name: 'Matt D\'Avella',                    url: 'https://www.youtube.com/@MattDAvella',                     platform: 'youtube',   description: 'Minimalism documentarian with 30-day challenge videos including digital detox' },
  ],

  'Intermittent Fasting': [
    { name: 'Dr. Jason Fung',                    url: 'https://www.youtube.com/@drjasonfung',                     platform: 'youtube',   description: 'Leading IF researcher explaining the science, protocols, and health benefits' },
    { name: 'Thomas DeLauer',                    url: 'https://www.youtube.com/@ThomasDeLauer',                   platform: 'youtube',   description: 'Detailed IF protocols, meal timing, and what to eat during eating windows' },
    { name: 'Zero Fasting App',                  url: 'https://www.zerolongevity.com/',                           platform: 'app',       description: 'Free fasting timer and tracker with educational content on IF protocols' },
  ],

  'Cold Exposure Training': [
    { name: 'Wim Hof — Guided Breathing',        url: 'https://www.youtube.com/@wimhof1',                         platform: 'youtube',   description: 'The Iceman himself with free guided breathing sessions and cold exposure protocols' },
    { name: 'Wim Hof Method — Free Mini Course', url: 'https://www.wimhofmethod.com/breathing-exercises',         platform: 'website',   description: '3 free video lessons including breathing technique and cold shower protocol' },
    { name: 'Andrew Huberman — Cold Exposure',   url: 'https://www.youtube.com/@hubermanlab',                     platform: 'youtube',   description: 'Neuroscience-backed cold exposure protocols for energy, focus, and mood' },
  ],

  'Breathwork Basics': [
    { name: 'Wim Hof — Guided Breathing',        url: 'https://www.youtube.com/watch?v=tybOi4hjZFQ',              platform: 'youtube',   description: 'Most popular free guided breathwork session on YouTube — millions of views' },
    { name: 'TAKE A DEEP BREATH',               url: 'https://www.youtube.com/@TAKEADEEPBREATH',                 platform: 'youtube',   description: 'Free guided breathwork sessions for energy, calm, sleep, and focus' },
    { name: 'Breathwrk App',                     url: 'https://www.breathwrk.com/',                               platform: 'app',       description: 'Free breathing exercises for stress, sleep, energy, and performance' },
  ],

  'Gratitude Practice': [
    { name: 'Insight Timer — Gratitude Meditations', url: 'https://insighttimer.com/',                            platform: 'app',       description: 'Thousands of free guided gratitude meditations and journaling prompts' },
    { name: 'Greater Good Science Center (Berkeley)', url: 'https://greatergood.berkeley.edu/topic/gratitude',     platform: 'website',   description: 'Free research-backed gratitude practices, articles, and the GGSC gratitude journal' },
    { name: 'The Science of Well-Being (Yale)',  url: 'https://www.coursera.org/learn/the-science-of-well-being', platform: 'course',    description: 'Free Yale course covering gratitude, savoring, and evidence-based happiness practices' },
  ],

  'Build a Reading Habit': [
    { name: 'Goodreads',                         url: 'https://www.goodreads.com/',                               platform: 'app',       description: 'Free reading tracker with annual challenges, reviews, and recommendations' },
    { name: 'Ali Abdaal — How to Read More',     url: 'https://www.youtube.com/@aliabdaal',                       platform: 'youtube',   description: 'Practical strategies for fitting more reading into your life from a prolific reader' },
    { name: 'Project Gutenberg',                 url: 'https://www.gutenberg.org/',                               platform: 'website',   description: '70,000+ free eBooks — classic literature available in multiple formats' },
    { name: 'Libby (OverDrive)',                 url: 'https://libbyapp.com/',                                    platform: 'app',       description: 'Free eBooks and audiobooks from your local library — just need a library card' },
  ],
}

// ============================================================================
// HELPER: Get primary resource for a skill (the "Start Learning" link)
// ============================================================================
export function getPrimaryResource(skillName) {
  const resources = SKILL_RESOURCE_DIRECTORY[skillName]
  return resources ? resources[0] : null
}

// ============================================================================
// HELPER: Get all resources for a skill
// ============================================================================
export function getSkillResources(skillName) {
  return SKILL_RESOURCE_DIRECTORY[skillName] || []
}

// ============================================================================
// HELPER: Count total resources
// ============================================================================
export function getTotalResourceCount() {
  return Object.values(SKILL_RESOURCE_DIRECTORY)
    .reduce((sum, resources) => sum + resources.length, 0)
}

// ============================================================================
// VALIDATION: Check all skills in the library have resources
// ============================================================================
export function findSkillsWithoutResources(skillLibrary) {
  return skillLibrary
    .map(skill => skill.name)
    .filter(name => !SKILL_RESOURCE_DIRECTORY[name])
}
