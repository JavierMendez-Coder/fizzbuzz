class FizzbuzzService {
  static applyValidationInExplorer(explorer) {
    const fizz = 3;
    const buzz = 5;

    if (explorer.score % fizz === 0 && explorer.score % buzz === 0) {
      explorer.trick = "FIZZBUZZ";
    } else if (explorer.score % fizz === 0) {
      explorer.trick = "FIZZ";
    } else if (explorer.score % buzz === 0) {
      explorer.trick = "BUZZ";
    }
    return explorer;
  }

  static applyValidationInNumber(number) {
    const fizz = 3;
    const buzz = 5;
    let output = number;

    if (number % fizz === 0 && number % buzz === 0) {
      output = "FIZZBUZZ";
    } else if (number % fizz === 0) {
      output = "FIZZ";
    } else if (number % buzz === 0) {
      output = "BUZZ";
    }
    return output;
  }
}

module.exports = FizzbuzzService;
