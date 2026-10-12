import Box, { type BoxProps } from '@mui/material/Box';
import { brandGradient } from '../../modules/theme';

// The S mark from the logo, with its teal-to-pink underline.
const sPath =
  'M8.5768,15.955 L6.2918,14.7947 L4.6629,15.8533 L4.42989,18.2341 L4.69051,19.587 C5.42327,20.4562 8.68711,25.6086 8.68711,25.6086 L11.1783,30.0338 C11.1783,30.0338 11.5892,35.4862 11.5754,35.7498 C11.5616,36.0134 9.98558,39.3332 9.98558,39.3332 L5.84038,40.0453 L2.62478,38.569 L1.19978,35.9222 L1.87966,31.2034 L5.31676,29.7056 L7.53196,31.6579 L7.85161,34.6488 L6.27491,36.4102 L4.24821,35.8622 L4.40766,33.8501 L5.63716,33.1633 L5.58888,33.8823 L4.82236,35.016 L6.09636,34.8289 L6.62144,32.9809 L5.21334,32.1208 L3.98914,33.2951 L3.52922,35.2152 L3.7477,36.4845 L6.8421,37.2595 L8.3437,35.2995 L8.70241,34.0087 L8.44717,30.8867 L6.17907,26.2247 L3.33377,22.4895 L1.83597,17.6099 L2.79413,13.5535 L5.95603,11.9461 L9.59693,13.1219 L10.8065,14.7944 L10.8425,18.2 L9.40535,20.5478 L6.67655,20.4619 L5.25545,18.0673 L5.85949,16.3795 L6.91349,16.0438 L8.27869,17.1698 L8.06482,18.2 L6.84142,17.6558 L8.13682,19.336 L9.02982,18.3073 L8.5768,15.955';

type BrandMarkProps = BoxProps & {
  size?: number;
  withBar?: boolean;
};

export default function BrandMark({ size = 28, withBar = true, sx, ...props }: BrandMarkProps) {
  return (
    <Box
      component="span"
      aria-hidden
      sx={[
        { display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: `${size * 0.08}px` },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      <svg viewBox="0.9 11.6 11 29" width={size * 0.4} height={size} fill="currentColor" focusable="false">
        <path d={sPath} />
      </svg>
      {withBar ? (
        <Box
          component="span"
          sx={{
            width: size * 0.62,
            height: Math.max(2, size * 0.08),
            borderRadius: 9,
            background: brandGradient,
          }}
        />
      ) : null}
    </Box>
  );
}
