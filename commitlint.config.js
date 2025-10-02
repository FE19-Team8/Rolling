/* eslint-disable prettier/prettier */
export default {
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore"],
    ],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 50],
    "my-custom-header-format": [2, "always"],
    "body-format-check": [2, "always"],
  },
  plugins: [
    {
      rules: {
        "my-custom-header-format": ({ header }) => {
          const valid = /^([a-z]+):\s[\w가-힣\s]+ \(#[0-9]+\)$/.test(header);
          return [
            valid,
            '❌ 커밋 제목은 "type: 제목(한영 혼용 가능) (#123)" 형식이어야 합니다.',
          ];
        },
        "body-format-check": ({ raw }) => {
          // raw 전체 커밋 메시지를 사용하여 더 정확한 파싱
          if (!raw) return [true];

          const lines = raw.split("\n");

          if (lines.length > 1) {
            const secondLine = lines[1];

            if (secondLine.trim() !== "") {
              return [false, "❌ 제목과 본문 사이에 빈 줄이 필요합니다."];
            }

            const bodyLines = lines.slice(2);
            const invalidLine = bodyLines.find(
              (line) => line.trim() && !line.trim().startsWith("-"),
            );

            if (invalidLine) {
              return [
                false,
                `❌ 본문의 각 줄은 '-'로 시작해야 합니다. 문제 있는 줄: "${invalidLine.trim()}"`,
              ];
            }
          }

          return [true];
        },
      },
    },
  ],
};
