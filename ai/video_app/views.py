from django.shortcuts import render
from django.conf import settings
import os
import uuid
from .video_pipeline import VideoMAE_ONNX_Pipeline

# ONNX 모델 경로와 라벨
onnx_path = os.path.join(settings.BASE_DIR, "anomalous_behavior_video_cls_model", "video_cls_model.onnx")
id2label = {
    0: "assult", 1: "datefight", 2: "robbery", 3: "burglary", 4: "trespass",
    5: "wander", 6: "vandalism", 7: "fight", 8: "dump", 9: "swoon", 10: "kidnap"
}

pipeline = VideoMAE_ONNX_Pipeline(onnx_path=onnx_path, id2label=id2label)

def video_page(request):
    result = None
    video_file_url = None

    if request.method == "POST" and request.FILES.get("video_file"):
        uploaded_file = request.FILES["video_file"]

        # 고유 이름 생성
        filename = f"{uuid.uuid4().hex}_{uploaded_file.name}"
        file_path = os.path.join(settings.MEDIA_ROOT, filename)

        # media 폴더에 저장
        os.makedirs(settings.MEDIA_ROOT, exist_ok=True)
        with open(file_path, "wb+") as f:
            for chunk in uploaded_file.chunks():
                f.write(chunk)

        # 모델 분석
        result = pipeline(file_path)

        # URL 변환
        video_file_url = settings.MEDIA_URL + filename

    return render(request, "video_app/video.html", {"result": result, "video_file_url": video_file_url})







