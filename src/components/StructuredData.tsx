interface StructuredDataProps {
    id: string;
    data: Record<string, unknown>;
}

/**
 * Injects JSON-LD safely during SSR to avoid duplicate hydration.
 */
const StructuredData = ({ id, data }: StructuredDataProps) => (
    <script
        id={id}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
);

export default StructuredData;
