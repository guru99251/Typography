// — DOM 요소 참조 —
// H1 controls
const h1FontInput         = document.getElementById('h1-font');
const h1FontWeightInput   = document.getElementById('h1-font-weight');
const h1FontSizeInput     = document.getElementById('h1-font-size');
const h1LetterSpacingInput= document.getElementById('h1-letter-spacing');
const h1LineHeightInput   = document.getElementById('h1-line-height');
const h1ColorInput        = document.getElementById('h1-color');
const h1TextTransformSelect = document.getElementById('h1-text-transform');

// H2 controls
const h2FontInput         = document.getElementById('h2-font');
const h2FontWeightInput   = document.getElementById('h2-font-weight');
const h2FontSizeInput     = document.getElementById('h2-font-size');
const h2LetterSpacingInput= document.getElementById('h2-letter-spacing');
const h2LineHeightInput   = document.getElementById('h2-line-height'); 
const h2ColorInput        = document.getElementById('h2-color');
const h2BorderInput       = document.getElementById('h2-border');
const h2TextTransformSelect = document.getElementById('h2-text-transform');

// Subtitle (.space-vertical) controls
const pSpaceFontInput     = document.getElementById('p-space-font');
const pSpaceFontSizeInput = document.getElementById('p-space-font-size');
const pSpaceLetterSpacingInput = document.getElementById('p-space-letter-spacing');
const pSpaceLineHeightInput = document.getElementById('p-space-line-height'); 
const pSpaceColorInput    = document.getElementById('p-space-color');
const pSpaceAlignSelect   = document.getElementById('p-space-align');

// Paragraph controls
const pFontInput          = document.getElementById('p-font');
const pFontSizeInput      = document.getElementById('p-font-size');
const pLineHeightInput    = document.getElementById('p-line-height');
const pLineLengthInput    = document.getElementById('p-line-length');
const pColorInput         = document.getElementById('p-color');
const pJustifyInput       = document.getElementById('p-justify');

// Container background control
const pBgColorInput       = document.getElementById('p-bg-color'); 

// Summary display elements
const displayFontFamily   = document.getElementById('display-font-family');
const displayTypeSize     = document.getElementById('display-type-size');
const displayLineHeight   = document.getElementById('display-line-height');
const displayLineLength   = document.getElementById('display-line-length');
const displayLineLengthCode = document.getElementById('display-line-length-code');
const displayH1Color      = document.getElementById('display-h1-color');
const displayH2Color      = document.getElementById('display-h2-color');
const displayPColor       = document.getElementById('display-p-color');
const displayBgColor      = document.getElementById('display-bg-color');

// paragraph-container 내의 실제 요소
const paraContainer       = document.querySelector('.paragraph-container');
const h1Element           = paraContainer.querySelector('h1');
const h2Element           = paraContainer.querySelector('h2');
const pSpaceElement       = paraContainer.querySelector('.space-vertical');
const pNormalElement      = paraContainer.querySelector('p:not(.space-vertical)');

// CSS 출력 영역 & 복사 버튼
const cssOutput           = document.getElementById('css-output');
const copyCssBtn          = document.getElementById('copy-css-btn');

// — 모든 컨트롤을 하나의 배열에 모아서 입력 이벤트 리스너 등록 —
const controls = [
  h1FontInput, h1FontWeightInput, h1FontSizeInput, h1LetterSpacingInput, h1LineHeightInput, h1ColorInput, h1TextTransformSelect,
  h2FontInput, h2FontWeightInput, h2FontSizeInput, h2LetterSpacingInput, h2LineHeightInput, h2ColorInput, h2BorderInput, h2TextTransformSelect,
  pSpaceFontInput, pSpaceFontSizeInput, pSpaceLetterSpacingInput, pSpaceLineHeightInput, pSpaceColorInput, pSpaceAlignSelect,
  pFontInput, pFontSizeInput, pLineHeightInput, pLineLengthInput, pColorInput, pJustifyInput,
  pBgColorInput
];
controls.forEach(ctrl => ctrl.addEventListener('input', updateStyles));

// — 스타일 업데이트 함수: 모든 실시간 변경 처리 —
function updateStyles() {
  // H1 스타일
  h1Element.style.fontFamily     = h1FontInput.value;
  h1Element.style.fontWeight     = h1FontWeightInput.value;
  h1Element.style.fontSize       = `${h1FontSizeInput.value}px`;
  h1Element.style.letterSpacing  = `${h1LetterSpacingInput.value}px`;
  h1Element.style.lineHeight     = `${h1LineHeightInput.value}%`;
  h1Element.style.textTransform  = h1TextTransformSelect.value;
  h1Element.style.color          = h1ColorInput.value;

  // H2 스타일
  h2Element.style.fontFamily     = h2FontInput.value;
  h2Element.style.fontWeight     = h2FontWeightInput.value;
  h2Element.style.fontSize       = `${h2FontSizeInput.value}px`;
  h2Element.style.letterSpacing  = `${h2LetterSpacingInput.value}px`;
  h2Element.style.lineHeight     = `${h2LineHeightInput.value}%`; 
  h2Element.style.textTransform  = h2TextTransformSelect.value;
  h2Element.style.color          = h2ColorInput.value;
  if (h2BorderInput.checked) {
    h2Element.style.borderLeft   = `4px solid ${h2ColorInput.value}`;
    h2Element.style.paddingLeft  = '0.5rem';
  } else {
    h2Element.style.borderLeft   = 'none';
    h2Element.style.paddingLeft  = '0';
  }

  // 부주제 (.space-vertical) 스타일
  pSpaceElement.style.fontFamily     = pSpaceFontInput.value;
  pSpaceElement.style.fontSize       = `${pSpaceFontSizeInput.value}px`;
  pSpaceElement.style.letterSpacing  = `${pSpaceLetterSpacingInput.value}px`; 
  pSpaceElement.style.lineHeight     = `${pSpaceLineHeightInput.value}%`; 
  pSpaceElement.style.color          = pSpaceColorInput.value;
  pSpaceElement.style.textAlign      = pSpaceAlignSelect.value;

  // 일반 Paragraph 스타일
  pNormalElement.style.fontFamily    = pFontInput.value;
  pNormalElement.style.fontSize      = `${pFontSizeInput.value}px`;
  pNormalElement.style.lineHeight    = `${pLineHeightInput.value}%`;
  pNormalElement.style.maxWidth      = `${pLineLengthInput.value}ch`;
  pNormalElement.style.color         = pColorInput.value;
  pNormalElement.style.textAlign     = pJustifyInput.checked ? 'justify' : 'left';

  // Paragraph-container 배경색
  paraContainer.style.backgroundColor = pBgColorInput.value; 

  // Summary 영역 업데이트
  displayFontFamily.textContent     = pFontInput.value;
  displayTypeSize.textContent       = `${pFontSizeInput.value}px`;
  displayLineHeight.textContent     = `${pLineHeightInput.value}%`;
  displayLineLength.textContent     = `${pLineLengthInput.value}자`;
  displayLineLengthCode.textContent = `${pLineLengthInput.value}ch`;
  displayH1Color.textContent        = h1ColorInput.value;
  displayH2Color.textContent        = h2ColorInput.value;
  displayPColor.textContent         = pColorInput.value;
  displayBgColor.textContent        = pBgColorInput.value;  

  updateCssOutput();
}

// — CSS 출력 생성 함수: 변경된 모든 속성을 반영 —
function updateCssOutput() {
  const cssString = `
/* Container background */
.paragraph-container {
  background-color: ${pBgColorInput.value};
}

/* H1 */
.paragraph-container h1 {
  font-family: ${h1FontInput.value};
  font-weight: ${h1FontWeightInput.value};
  font-size: ${h1FontSizeInput.value}px;
  letter-spacing: ${h1LetterSpacingInput.value}px;
  line-height: ${h1LineHeightInput.value}%;
  text-transform: ${h1TextTransformSelect.value};
  color: ${h1ColorInput.value};
}

/* H2 */
.paragraph-container h2 {
  font-family: ${h2FontInput.value};
  font-weight: ${h2FontWeightInput.value};
  font-size: ${h2FontSizeInput.value}px;
  letter-spacing: ${h2LetterSpacingInput.value}px;
  line-height: ${h2LineHeightInput.value}%;
  text-transform: ${h2TextTransformSelect.value};
  color: ${h2ColorInput.value};
  ${h2BorderInput.checked
    ? `border-left: 4px solid ${h2ColorInput.value}; padding-left: 0.5rem;`
    : `border-left: none; padding-left: 0;`}
}

/* Subtitle */
.paragraph-container .space-vertical {
  font-family: ${pSpaceFontInput.value};
  font-size: ${pSpaceFontSizeInput.value}px;
  letter-spacing: ${pSpaceLetterSpacingInput.value}px; /* if used */
  line-height: ${pSpaceLineHeightInput.value}%;
  color: ${pSpaceColorInput.value};
  text-align: ${pSpaceAlignSelect.value};
}

/* Body paragraph */
.paragraph-container p:not(.space-vertical) {
  font-family: ${pFontInput.value};
  font-size: ${pFontSizeInput.value}px;
  line-height: ${pLineHeightInput.value}%;
  max-width: ${pLineLengthInput.value}ch;
  color: ${pColorInput.value};
  text-align: ${pJustifyInput.checked ? 'justify' : 'left'};
}
  `.trim();
  cssOutput.value = cssString;
}

// — 초기화 & 복사 기능 —
updateStyles();
copyCssBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(cssOutput.value)
    .then(() => alert('CSS 코드가 복사되었습니다.'))
    .catch(() => alert('복사에 실패했습니다.'));
});

// — 더블클릭 편집 기능 유지 —
// (본문 요소 contentEditable 로 설정되어 있으므로 JS에서는 별도 처리 불필요)


// 3) 더블클릭으로 편집 가능 설정
const editableEls = paraContainer.querySelectorAll('h1, h2, .space-vertical, p:not(.space-vertical)');
editableEls.forEach(el => {
  el.addEventListener('dblclick', () => {
    el.contentEditable = true; // 편집 모드 활성화
    el.focus();
  });
  el.addEventListener('blur', () => {
    el.contentEditable = false; // 편집 모드 해제
  });
});

