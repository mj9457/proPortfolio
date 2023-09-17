# Node.js를 기반으로하는 LTS (Long Term Support) 이미지 사용
FROM node:lts

# 작업 디렉토리 설정
WORKDIR /app

# 프로젝트의 package.json 및 package-lock.json을 Docker 이미지에 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 나머지 프로젝트 파일 복사
COPY . .

# React 프로젝트 빌드
RUN NODE_OPTIONS="--max-old-space-size=4096" npm run build