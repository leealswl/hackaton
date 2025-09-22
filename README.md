### 백엔드 (Django)
가상환경 생성 & 실행
python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows

패키지설치
pip install -r requirements.txt

db 마이그레이션
python manage.py migrate

서버 실행 
python manage.py runserver

http://127.0.0.1:8000/

### 프론트 (리액트)
cd frontend
npm install

http://127.0.0.1:5173/
