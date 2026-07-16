/**
 * Renders a schema.org JSON-LD script tag.
 * Use with the builders in '@/lib/structured-data'.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
