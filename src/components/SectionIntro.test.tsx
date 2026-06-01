/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import SectionIntro from './SectionIntro';


describe('SectionIntro', () => {
    it('renderiza el título', () => {
        render(<SectionIntro title="Test Title" />);
        expect(screen.getByText('Test Title')).toBeInTheDocument();
    });

    it('renderiza la descripción cuando se proporciona', () => {
        render(<SectionIntro title="Title" description="Test description" />);
        expect(screen.getByText('Test description')).toBeInTheDocument();
    });

    it('no renderiza descripción cuando no se proporciona', () => {
        render(<SectionIntro title="Title" />);
        expect(screen.queryByText(/description/i)).not.toBeInTheDocument();
    });

    it('renderiza eyebrow cuando se proporciona', () => {
        render(<SectionIntro title="Title" eyebrow="NUEVO" />);
        expect(screen.getByText('NUEVO')).toBeInTheDocument();
    });

    it('aplica alineación centrada por defecto', () => {
        const { container } = render(<SectionIntro title="Title" />);
        // eslint-disable-next-line testing-library/no-node-access
        const wrapper = container.firstChild as HTMLElement;
        expect(wrapper).toHaveClass('text-center');
    });

    it('aplica alineación izquierda cuando se especifica', () => {
        const { container } = render(<SectionIntro title="Title" align="left" />);
        // eslint-disable-next-line testing-library/no-node-access
        const wrapper = container.firstChild as HTMLElement;
        expect(wrapper).toHaveClass('text-left');
    });

    it('aplica tone light por defecto', () => {
        render(<SectionIntro title="Title" description="Desc" />);
        const title = screen.getByText('Title');
        expect(title).toHaveClass('text-white');
    });

    it('aplica tone light cuando se especifica', () => {
        render(<SectionIntro title="Title" description="Desc" tone="light" />);
        const title = screen.getByText('Title');
        expect(title).toHaveClass('text-white');
    });

    it('aplica tone dark cuando se especifica', () => {
        render(<SectionIntro title="Title" description="Desc" tone="dark" />);
        const title = screen.getByText('Title');
        expect(title).toHaveClass('text-slate-900');
    });

    it('isDark override tone para backwards compatibility', () => {
        render(<SectionIntro title="Title" description="Desc" isDark={false} />);
        const title = screen.getByText('Title');
        expect(title).toHaveClass('text-white');
    });

    it('acepta className adicional', () => {
        const { container } = render(<SectionIntro title="Title" className="custom-class" />);
        // eslint-disable-next-line testing-library/no-node-access
        const wrapper = container.firstChild as HTMLElement;
        expect(wrapper).toHaveClass('custom-class');
    });

    it('acepta titleClassName personalizado', () => {
        render(<SectionIntro title="Title" titleClassName="custom-title" />);
        const title = screen.getByText('Title');
        expect(title).toHaveClass('custom-title');
    });

    it('acepta descriptionClassName personalizado', () => {
        render(<SectionIntro title="Title" description="Desc" descriptionClassName="custom-desc" />);
        const desc = screen.getByText('Desc');
        expect(desc).toHaveClass('custom-desc');
    });

    it('acepta eyebrowClassName personalizado', () => {
        render(<SectionIntro title="Title" eyebrow="New" eyebrowClassName="custom-eyebrow" />);
        const eyebrow = screen.getByText('New');
        expect(eyebrow).toHaveClass('custom-eyebrow');
    });
});
