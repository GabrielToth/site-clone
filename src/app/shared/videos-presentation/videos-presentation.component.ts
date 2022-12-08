import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-videos-presentation',
  templateUrl: './videos-presentation.component.html',
  styleUrls: ['./videos-presentation.component.scss']
})
export class VideosPresentationComponent implements OnInit {

  vimeoClicked() {

    const vimeo_video = document.querySelector('.vimeo');
    vimeo_video?.insertAdjacentHTML('afterbegin',
      `<div style="padding:56.25% 0 0 0;position:relative;" class="vimeo-video">
      <iframe src="https://player.vimeo.com/video/352070241?h=4c714b5957&loop=1&byline=0&portrait=0"
        style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Vimeo vídeo apresentação">
      </iframe>
    </div>
    <script src="https://player.vimeo.com/api/player.js"></script>
`)
    document.querySelector('.vimeo-thumbnail')?.remove();
    vimeo_video?.classList.remove('vimeo')
  }

  youtubeClicked() {
    const youtube_video = document.querySelector('.youtube');
    youtube_video?.insertAdjacentHTML('afterbegin',
      `<div style="padding:56.25% 0 0 0;position:relative;" class="youtube-container">
        <iframe width=100% height="245" src="https://www.youtube.com/embed/GwttGRBPf1M" title="YouTube video player"
          style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
`)
    document.querySelector('.youtube-thumbnail')?.remove();
    youtube_video?.classList.remove('youtube')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
