class FizzbuzzService {
  static applyValidationInExplorer(explorer) {
    const fizz = 3,
      buzz = 5;

    if (explorer.score % fizz === 0 && explorer.score % buzz === 0) {
      explorer.trick = "FIZZBUZZ";
    } else if (explorer.score % fizz === 0) {
      explorer.trick = "FIZZ";
    } else if (explorer.score % buzz === 0) {
      explorer.trick = "BUZZ";
    }
    return explorer;
  }
}

module.exports = FizzbuzzService;
