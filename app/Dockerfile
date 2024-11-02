FROM python:3
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN pip install -r requirements.txt
ENV FLASK_APP=backend.py
ENV FLASK_ENV=production
EXPOSE 5000
CMD ["flask", "run", "--host=0.0.0.0"]