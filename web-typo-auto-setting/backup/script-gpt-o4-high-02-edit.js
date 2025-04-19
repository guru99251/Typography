// script.js (정리 및 오류 수정된 전체 버전)

// — DOM 요소 참조 —
const paraContainer         = document.querySelector('.paragraph-container');
const cssOutput             = document.getElementById('css-output');
const copyCssBtn            = document.getElementById('copy-css-btn');

// H1 controls
const h1FontInput           = document.getElementById('h1-font');
const h1FontWeightInput     = document.getElementById('h1-font-weight');
const h1FontSizeInput       = document.getElementById('h1-font-size');
const h1LetterSpacingInput  = document.getElementById('h1-letter-spacing');
const h1LineHeightInput     = document.getElementById('h1-line-height');
const h1BoldInput           = document.getElementById('h1-bold');
const h1ItalicInput         = document.getElementById('h1-italic');
const h1ColorInput          = document.getElementById('h1-color');
const h1TextTransformSelect = document.getElementById('h1-text-transform');

// H2 controls
const h2FontInput           = document.getElementById('h2-font');
const h2FontWeightInput     = document.getElementById('h2-font-weight');
const h2FontSizeInput       = document.getElementById('h2-font-size');
const h2LetterSpacingInput  = document.getElementById('h2-letter-spacing');
const h2LineHeightInput     = document.getElementById('h2-line-height');
const h2BoldInput           = document.getElementById('h2-bold');
const h2ItalicInput         = document.getElementById('h2-italic');
const h2ColorInput          = document.getElementById('h2-color');
const h2BorderInput         = document.getElementById('h2-border');
const h2TextTransformSelect = document.getElementById('h2-text-transform');

// Subtitle controls
const pSpaceFontInput       = document.getElementById('p-space-font');
const pSpaceFontSizeInput   = document.getElementById('p-space-font-size');
const pSpaceLetterSpacingInput = document.getElementById('p-space-letter-spacing');
const pSpaceLineHeightInput = document.getElementById('p-space-line-height');
const pSpaceBoldInput       = document.getElementById('p-space-bold');
const pSpaceItalicInput     = document.getElementById('p-space-italic');
const pSpaceColorInput      = document.getElementById('p-space-color');
const pSpaceAlignSelect     = document.getElementById('p-space-align');

// Body paragraph controls
const pFontInput            = document.getElementById('p-font');
const pFontSizeInput        = document.getElementById('p-font-size');
const pLineHeightInput      = document.getElementById('p-line-height');
const pLineLengthInput      = document.getElementById('p-line-length');
const pBoldInput            = document.getElementById('p-bold');
const pItalicInput          = document.getElementById('p-italic');
const pColorInput           = document.getElementById('p-color');
const pJustifyInput         = document.getElementById('p-justify');

// Container background
const pBgColorInput         = document.getElementById('p-bg-color');

// Summary elements
const displayFontFamily     = document.getElementById('display-font-family');
const displayTypeSize       = document.getElementById('display-type-size');
const displayLineHeight     = document.getElementById('display-line-height');
const displayLineLength     = document.getElementById('display-line-length');
const displayLineLengthCode = document.getElementById('display-line-length-code');
const displayH1Color        = document.getElementById('display-h1-color');
const displayH2Color        = document.getElementById('display-h2-color');
const displayPColor         = document.getElementById('display-p-color');
const displayBgColor        = document.getElementById('display-bg-color');

// — 이벤트 바인딩 —
const controls = [
  h1FontInput, h1FontWeightInput, h1FontSizeInput, h1LetterSpacingInput, h1LineHeightInput, h1BoldInput, h1ItalicInput, h1ColorInput, h1TextTransformSelect,
  h2FontInput, h2FontWeightInput, h2FontSizeInput, h2LetterSpacingInput, h2LineHeightInput, h2BoldInput, h2ItalicInput, h2ColorInput, h2BorderInput, h2TextTransformSelect,
  pSpaceFontInput, pSpaceFontSizeInput, pSpaceLetterSpacingInput, pSpaceLineHeightInput, pSpaceBoldInput, pSpaceItalicInput, pSpaceColorInput, pSpaceAlignSelect,
  pFontInput, pFontSizeInput, pLineHeightInput, pLineLengthInput, pBoldInput, pItalicInput, pColorInput, pJustifyInput,
  pBgColorInput
].filter(Boolean);
controls.forEach(ctrl => ctrl.addEventListener('input', updateStyles));

// — 스타일 업데이트 —
function updateStyles() {
  // 실시간 ELEMENT 리스트 재조회
  const h1Els = paraContainer.querySelectorAll('h1');
  const h2Els = paraContainer.querySelectorAll('h2');
  const subEls = paraContainer.querySelectorAll('.space-vertical');
  const pEls   = paraContainer.querySelectorAll('p:not(.space-vertical)');

  // H1 적용
  h1Els.forEach(el => {
    if (h1FontInput) el.style.fontFamily = h1FontInput.value;
    if (h1FontSizeInput) el.style.fontSize = `${h1FontSizeInput.value}px`;
    if (h1LetterSpacingInput) el.style.letterSpacing = `${h1LetterSpacingInput.value}px`;
    if (h1LineHeightInput) {
      const lh = parseFloat(h1LineHeightInput.value);
      el.style.lineHeight = `${lh}%`;
      const extra = (lh/100 - 1) * parseFloat(h1FontSizeInput.value);
      el.style.marginBottom = `${extra}px`;
    }
    if (h1FontWeightInput || h1BoldInput) {
      el.style.fontWeight = h1BoldInput?.checked ? 'bold' : h1FontWeightInput?.value;
    }
    if (h1ItalicInput) el.style.fontStyle = h1ItalicInput.checked ? 'italic' : 'normal';
    if (h1TextTransformSelect) el.style.textTransform = h1TextTransformSelect.value;
    if (h1ColorInput) el.style.color = h1ColorInput.value;
  });

  // H2 적용
  h2Els.forEach(el => {
    if (h2FontInput) el.style.fontFamily = h2FontInput.value;
    if (h2FontSizeInput) el.style.fontSize = `${h2FontSizeInput.value}px`;
    if (h2LetterSpacingInput) el.style.letterSpacing = `${h2LetterSpacingInput.value}px`;
    if (h2LineHeightInput) {
      const lh = parseFloat(h2LineHeightInput.value);
      el.style.lineHeight = `${lh}%`;
      const extra = (lh/100 - 1) * parseFloat(h2FontSizeInput.value);
      el.style.marginBottom = `${extra}px`;
    }
    if (h2FontWeightInput || h2BoldInput) {
      el.style.fontWeight = h2BoldInput?.checked ? 'bold' : h2FontWeightInput?.value;
    }
    if (h2ItalicInput) el.style.fontStyle = h2ItalicInput.checked ? 'italic' : 'normal';
    if (h2TextTransformSelect) el.style.textTransform = h2TextTransformSelect.value;
    if (h2ColorInput) el.style.color = h2ColorInput.value;
    if (h2BorderInput) el.style.borderLeft = h2BorderInput.checked ? `4px solid ${h2ColorInput.value}` : 'none';
  });

  // 부주제 적용
  subEls.forEach(el => {
    if (pSpaceFontInput) el.style.fontFamily = pSpaceFontInput.value;
    if (pSpaceFontSizeInput) el.style.fontSize = `${pSpaceFontSizeInput.value}px`;
    if (pSpaceLetterSpacingInput) el.style.letterSpacing = `${pSpaceLetterSpacingInput.value}px`;
    if (pSpaceLineHeightInput) {
      const lh = parseFloat(pSpaceLineHeightInput.value);
      el.style.lineHeight = `${lh}%`;
      const extra = (lh/100 - 1) * parseFloat(pSpaceFontSizeInput.value);
      el.style.marginBottom = `${extra}px`;
    }
    if (pSpaceBoldInput) el.style.fontWeight = pSpaceBoldInput.checked ? 'bold' : 'normal';
    if (pSpaceItalicInput) el.style.fontStyle = pSpaceItalicInput.checked ? 'italic' : 'normal';
    if (pSpaceColorInput) el.style.color = pSpaceColorInput.value;
    if (pSpaceAlignSelect) el.style.textAlign = pSpaceAlignSelect.value;
  });

  // 본문 적용
  pEls.forEach(el => {
    if (pFontInput) el.style.fontFamily = pFontInput.value;
    if (pFontSizeInput) el.style.fontSize = `${pFontSizeInput.value}px`;
    if (pLineHeightInput) el.style.lineHeight = `${pLineHeightInput.value}%`;
    if (pLineLengthInput) el.style.maxWidth = `${pLineLengthInput.value}ch`;
    if (pBoldInput) el.style.fontWeight = pBoldInput.checked ? 'bold' : 'normal';
    if (pItalicInput) el.style.fontStyle = pItalicInput.checked ? 'italic' : 'normal';
    if (pColorInput) el.style.color = pColorInput.value;
    if (pJustifyInput) el.style.textAlign = pJustifyInput.checked ? 'justify' : 'left';
  });

  // 배경색 적용
  if (pBgColorInput) paraContainer.style.backgroundColor = pBgColorInput.value;

  // summary 업데이트 (필요 시)"
  displayFontFamily.textContent     = pFontInput?.value || '';
  displayTypeSize.textContent       = pFontSizeInput ? `${pFontSizeInput.value}px` : '';
  displayLineHeight.textContent     = pLineHeightInput ? `${pLineHeightInput.value}%` : '';
  displayLineLength.textContent     = pLineLengthInput ? `${pLineLengthInput.value}자` : '';
  displayLineLengthCode.textContent = pLineLengthInput ? `${pLineLengthInput.value}ch` : '';
  displayH1Color.textContent        = h1ColorInput?.value || '';
  displayH2Color.textContent        = h2ColorInput?.value || '';
  displayPColor.textContent         = pColorInput?.value || '';
  displayBgColor.textContent        = pBgColorInput?.value || '';

  updateCssOutput();
}

// — CSS 출력 생성 —
function updateCssOutput() {
  const cssString = `
.paragraph-container { background-color: ${pBgColorInput?.value || ''}; }

.paragraph-container h1 {
  font-family: ${h1FontInput?.value};
  font-weight: ${h1BoldInput?.checked ? 'bold' : h1FontWeightInput?.value};
  font-size: ${h1FontSizeInput?.value}px;
  letter-spacing: ${h1LetterSpacingInput?.value}px;
  line-height: ${h1LineHeightInput?.value}%;
  font-style: ${h1ItalicInput?.checked ? 'italic' : 'normal'};
  text-transform: ${h1TextTransformSelect?.value};
  color: ${h1ColorInput?.value};
}

.paragraph-container h2 {
  font-family: ${h2FontInput?.value};
  font-weight: ${h2BoldInput?.checked ? 'bold' : h2FontWeightInput?.value};
  font-size: ${h2FontSizeInput?.value}px;
  letter-spacing: ${h2LetterSpacingInput?.value}px;
  line-height: ${h2LineHeightInput?.value}%;
  font-style: ${h2ItalicInput?.checked ? 'italic' : 'normal'};
  text-transform: ${h2TextTransformSelect?.value};
  color: ${h2ColorInput?.value};
  ${h2BorderInput?.checked ? `border-left: 4px solid ${h2ColorInput?.value}` : 'border-left: none'};
}

.paragraph-container .space-vertical {
  font-family: ${pSpaceFontInput?.value};
  font-weight: ${pSpaceBoldInput?.checked ? 'bold' : 'normal'};
  font-size: ${pSpaceFontSizeInput?.value}px;
  letter-spacing: ${pSpaceLetterSpacingInput?.value}px;
  line-height: ${pSpaceLineHeightInput?.value}%;
  font-style: ${pSpaceItalicInput?.checked ? 'italic' : 'normal'};
  color: ${pSpaceColorInput?.value};
  text-align: ${pSpaceAlignSelect?.value};
}

.paragraph-container p:not(.space-vertical) {
  font-family: ${pFontInput?.value};
  font-weight: ${pBoldInput?.checked ? 'bold' : 'normal'};
  font-size: ${pFontSizeInput?.value}px;
  line-height: ${pLineHeightInput?.value}%;
  max-width: ${pLineLengthInput?.value}ch;
  font-style: ${pItalicInput?.checked ? 'italic' : 'normal'};
  color: ${pColorInput?.value};
  text-align: ${pJustifyInput?.checked ? 'justify' : 'left'};
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

