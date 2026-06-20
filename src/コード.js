const DIAGNOSIS_QUESTIONS = [
  { id: 'vegetables', text: '野菜・海藻・きのこ類を毎日食べていますか？' },
  { id: 'fermented', text: '発酵食品を週4日以上食べていますか？' },
  { id: 'water', text: '水やお茶を1日1.5L程度飲んでいますか？' },
  { id: 'breakfast', text: '朝食を定期的に食べていますか？' },
  { id: 'exercise', text: '週2回以上、軽く汗ばむ運動をしていますか？' },
  { id: 'sleep', text: '睡眠時間を6時間以上確保できていますか？' },
  { id: 'stress', text: 'リラックスする時間を日々作れていますか？' },
  { id: 'rhythm', text: '食事や睡眠の時間はおおむね一定ですか？' },
  { id: 'bowel', text: 'すっきりした排便が週5日以上ありますか？' },
  { id: 'chewing', text: 'よく噛んで、ゆっくり食事をしていますか？' }
];

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('腸活診断')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getDiagnosisQuestions() {
  return DIAGNOSIS_QUESTIONS;
}

function diagnoseGutHealth(answers) {
  const normalizedAnswers = answers || {};
  const score = DIAGNOSIS_QUESTIONS.reduce((total, question) => {
    const value = Number(normalizedAnswers[question.id]);
    return total + (Number.isFinite(value) ? Math.max(0, Math.min(2, value)) : 0);
  }, 0);

  return buildDiagnosis_(score);
}

function buildDiagnosis_(score) {
  if (score >= 16) {
    return {
      score: score,
      level: 'すこやか腸タイプ',
      message: 'よい習慣が身についています。無理なく続けることを大切にしましょう。',
      tips: ['食材の種類を少しずつ増やす', '現在の睡眠と運動習慣を維持する', '体調の変化を定期的に振り返る']
    };
  }

  if (score >= 10) {
    return {
      score: score,
      level: 'のびしろ腸タイプ',
      message: '基本はできています。続けやすい習慣を一つ加えると、さらに整いやすくなります。',
      tips: ['毎食どれか一つ食物繊維を加える', '起床後にコップ一杯の水を飲む', '食事時間をできる範囲でそろえる']
    };
  }

  return {
    score: score,
    level: 'いたわり腸タイプ',
    message: '生活リズムを整えるところから、焦らず小さく始めるのがおすすめです。',
    tips: ['朝食か水分補給のどちらかを習慣化する', '一日10分だけ歩く時間を作る', '気になる症状が続く場合は医療機関に相談する']
  };
}

