import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`)).default;
  const article = messages.blog.articles[0];
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = (await import(`../../../../../messages/${locale}.json`)).default;
  const t = messages.blog;
  const article = messages.blog.article1;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Link */}
        <Link
          href={`/${locale}/blog/`}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.backToBlog}
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {article.author}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {article.title}
          </h1>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          {article.content.map((section: any, index: number) => (
            <div key={index} className="mb-8">
              {section.heading && (
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {section.heading}
                </h2>
              )}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                {section.text}
              </p>
            </div>
          ))}
        </article>

        {/* CTA Section */}
        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {article.cta.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {article.cta.description}
          </p>
          <Link
            href={`/${locale}/`}
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
          >
            {article.cta.button}
          </Link>
        </div>
      </div>
    </div>
  );
}
