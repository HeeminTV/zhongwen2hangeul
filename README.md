# zhongwen2hangeul
## 이 node.js 스크립트는 중국 한즈(汉字)를 [국립국어원 중국어 표기법](https://chinese.bufs.ac.kr/chinese/index.php?pCode=MN300039&mode=fdn&idx=65902&num=1)에 따라 한글로 변환합니다.
### 필요 사항(exe 빌드에서는 필요하지 않음)
- node.js
### 용법
- node에서 실행할 경우
`node zhongwen2hangeul.js <중국어 텍스트>`
- exe 빌드에서 실행할 경우
`zhongwen2hangeul_x.x.exe <중국어 텍스트>`
### 참고사항
- 배치파일에서 결과값을 정리하지 않고 빠르고 편하게 얻을 수 있도록 출력되는 문장은 오직 한줄로만 구성되며 `output:`과 같은 일반적인 수식 기호도 없습니다.
- 병음표기(拼音, Pīnyīn)를 입력할 수 있으나 악센트 문자(`ā`, `á`, `ǎ`, `à` 등)는 모두 일반 라틴 문자로 치환되어야 합니다.
- 모든 문자 사이에 공백이 들어가며 추후 커맨드 옵션을 통해 이들도 사용자 지정 가능하도록 수정할 예정입니다.
- 변환된 병음표기(拼音, Pīnyīn)에서 `ü` 같은 문자가 변환되지 않는 문제가 있습니다.
### 예
```
C:\Users\User\Documents\GitHubFiles\zhongwen2hangeul\release> .\zhongwen2hangeul_1.0.exe 汉字
한 즈
C:\Users\User\Documents\GitHubFiles\zhongwen2hangeul\release> .\zhongwen2hangeul_1.0.exe 中华人民共和国
중 화 런 민 궁 허 궈
PS C:\Users\User\Documents\GitHubFiles\zhongwen2hangeul\release> .\zhongwen2hangeul_1.0.exe 我愛北京天安門
워 아이 베이 징 톈 안 먼
```
