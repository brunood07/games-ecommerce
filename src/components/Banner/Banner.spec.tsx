import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/tests/helpers';

import { Banner } from '.';

describe('Testing the main component', () => {
  it('should render the correctly', () => {
    const { container } = renderWithTheme(
      <Banner
        img="https://source.unsplash.com/user/willianjusten/1042x580"
        title="Defy death"
        subTitle="<p>Play the new <strong>Crashlands</strong> season</p>"
        buttonLabel="Buy now"
        buttonLink="/games/defy-death"
      />
    );

    // verifique se o title existe renderizado (toBeInTheDocument())
    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument();
    // verifique se o subtitle existe renderizado
    expect(
      screen.getByRole('heading', { name: /Play the new Crashlands season/i })
    ).toBeInTheDocument();
    // verifique se a imagem existe renderizado
    expect(
      screen.getByRole('img', { name: /defy death/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a ribbon', () => {
    renderWithTheme(
      <Banner
        img="https://source.unsplash.com/user/willianjusten/1042x580"
        title="Defy death"
        subTitle="<p>Play the new <strong>Crashlands</strong> season</p>"
        buttonLabel="Buy now"
        buttonLink="/games/defy-death"
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    );

    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' });
  });
});
