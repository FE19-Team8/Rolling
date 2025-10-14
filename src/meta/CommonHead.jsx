import { Title, Meta, Link } from 'react-head';

export default function CommonHead({ title, description, canonical, image }) {
  const site = 'https://rolling-xsll.vercel.app';

  const _title = title ?? 'Rolling | 누구나 손쉽게, 온라인 롤링페이퍼를 만들 수 있어요';
  const _desc = description ?? '디지털 롤링페이퍼를 주고받자 🎁';
  const _url = canonical ?? site;
  const _img = image ?? `${site}/og/og_main.png`;

  return (
    <>
      {/* 기본 SEO */}
      <Title>{_title}</Title>
      <Meta name="description" content={_desc} />
      <Link rel="canonical" href={_url} />

      {/* Open Graph */}
      <Meta property="og:type" content="website" />
      <Meta property="og:site_name" content="Rolling" />
      <Meta property="og:title" content={_title} />
      <Meta property="og:description" content={_desc} />
      <Meta property="og:url" content={_url} />
      <Meta property="og:image" content={_img} />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />
    </>
  );
}
