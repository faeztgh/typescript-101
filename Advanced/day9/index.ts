/******************************** As Const ********************************/
const socials = {
    facebook: "https://facebook.com",
    google: "https://google.com",
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    pinterest: "https://pinterest.com",
} as const;

type SocialTypes = typeof socials;
type SocialValues = SocialTypes[keyof typeof socials];

const facebook = socials.facebook;

/**
 * Generates the social name from the given social link.
 *
 * @param {SocialTypes[keyof SocialTypes]} input - The input value.
 * @return {string} The generated social name.
 */
const getSocialName = (
    input: SocialTypes[keyof SocialTypes]
): keyof SocialTypes | undefined => {
    return (Object.keys(socials) as (keyof SocialTypes)[]).find((key) => {
        return socials[key] === input;
    });
};

console.log(getSocialName("https://facebook.com")); // google
console.log(getSocialName(socials.facebook)); // facebook

const getSocialValue = (input: keyof SocialTypes): SocialValues => {
    return socials[input];
};

console.log(getSocialValue("facebook"));
console.log(getSocialValue("facebook"));

