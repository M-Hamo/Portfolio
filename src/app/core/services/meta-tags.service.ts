import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoMetaTagsService {
  public constructor(
    private readonly title: Title,
    private readonly meta: Meta
  ) {}

  public setTags(content:any): void {
    const options = {
      title: content?.name,
      description: content?.description,
      url: content?.url,
      imageUrl: content?.mainImage
    };
    this.updateTitle(`content - ${content.name}`);
    this.setPageTags(options);
  }


  private updateTitle(title: string): void {
    this.title.setTitle(title);
  }

  private setPageTags(options: {
    title: string;
    description: string;
    url: string;
    imageUrl: string;
    keywords?: string;
  }): void {
    const { title, description, url, imageUrl, keywords } = options;

    const metaTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: imageUrl },
      { property: 'og:url', content: url },
      { name: 'keywords', content: keywords },
      { name: 'description', content: description },
      { name: 'author', content: title },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: url },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl }
    ];

    this.updateMetaTags(metaTags);
  }

  private updateMetaTags(metaTags: MetaDefinition[]): void {
    metaTags.forEach(tag => {
      if (tag.content) {
        this.meta.updateTag(
          tag,
          tag.property ? `property = "${tag.property}"` : `name = "${tag.name}"`
        );
      }
    });
  }
}
