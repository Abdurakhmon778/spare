import SIZES from './sizes'

// Regular 400
// Medium 500
// SemiBold 600
// Bold 700
// ExtraBold 800
// Black 9000

const family = {
    medium: "Inter-Medium",
    semiBold: "Inter-SemiBold",
    regular: "Inter-Regular"
}

export default {
    h1: { fontSize: SIZES.h1, lineHeight: 32, fontFamily: family.medium },
    h2: { fontSize: SIZES.h2, lineHeight: 16, fontFamily: family.semiBold },
    h3_10: { fontSize: SIZES.h3, lineHeight: 10, fontFamily: family.semiBold },
    h3_16: { fontSize: SIZES.h3, lineHeight: 16, fontFamily: family.semiBold },
    h4: { fontSize: SIZES.h4, lineHeight: 16, fontFamily: family.semiBold },
    h5_13: { fontSize: SIZES.h5, lineHieght: 13, fontFamily: family.medium },
    h5_10: { fontSize: SIZES.h5, lineHieght: 10, fontFamily: family.medium },
    h6: { fontSize: SIZES.h6, lineHeight: 10, fontFamily: family.semiBold },
    h7_18: { fontSize: SIZES.h7, lineHeight: 18, fontFamily: family.medium },
    h7_16: { fontSize: SIZES.h7, lineHeight: 16, fontFamily: family.medium },
    body1: { fontSize: SIZES.body1, lineHeight: 16, fontFamily: family.regular },
    body2: { fontSize: SIZES.body2, lineHeight: 16, fontFamily: family.semiBold },
    body3_20: { fontSize: SIZES.body3, lineHeight: 20, fontFamily: family.medium },
    body3_16: { fontSize: SIZES.body3, lineHeight: 16, fontFamily: family.medium },
    body4: { fontSize: SIZES.body4, lineHeight: 10, fontFamily: family.medium },
    body5_22: { fontSize: SIZES.body5, lineHeight: 22, fontFamily: family.medium },
    body5_10: { fontSize: SIZES.body5, lineHeight: 10, fontFamily: family.medium },
    body6: { fontSize: SIZES.body6, lineHeight: 16, fontFamily: family.semiBold }
}
