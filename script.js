const blogPosts = [

    {
        title: 'Getting Wallets Ready for the Next One Billion Users: Account Abstraction',
        url: 'https://blog.getclave.io/ultimate-account-abstraction-guide',
        date: '05.15.24'
    },
    {
        title: 'Key Abstraction - Moving Beyond Buzzwords',
        url: 'https://mirror.xyz/0x8958D0c419BCDFB8A86b8c0089552bE015fbe364/DJixZxImAyBQF2QUGkgNLH0h0GXqvmKdwEuzkv63tRE',
        date: '10.01.24'
    },
    {
        title: 'Hardware-Level Security, In Your Pocket',
        url: 'https://mirror.xyz/0x8958D0c419BCDFB8A86b8c0089552bE015fbe364/hvpY_houtY9gGDnT8-jthCmE963EawYnyITogyNP_ZU',
        date: '09.15.24'
    },
    {
        title: "You Don't Need a Ph.D.to Build ZK- Enabled Apps",
        url: 'https://mirror.xyz/0x8958D0c419BCDFB8A86b8c0089552bE015fbe364/tMH25v_2eCLWUkzdupOslagfejLOUSqwQV7Nob7io7I',
        date: '09.01.24'
    },
    {
        title: 'Zora but Chainless',
        url: 'https://mirror.xyz/0x8958D0c419BCDFB8A86b8c0089552bE015fbe364/mcF-cdUbSSx-pCAbsFO8TG7iM4l4B0JUBU-p_KTSpw8',
        date: '08.15.24'
    },
    {
        title: "Cyprus and Crypto, Tron's Network Effect",
        url: 'https://mirror.xyz/0x8958D0c419BCDFB8A86b8c0089552bE015fbe364/ODhOuYjK80atc9_jGprXotSo3PNobT1PRLFtorXHBrA',
        date: '08.01.24'
    },
    {
        title: 'Evolution of the Trust and EigenLayer',
        url: 'https://mirror.xyz/0x8958D0c419BCDFB8A86b8c0089552bE015fbe364/xZ3QRJyohVb0rAdXsTbS5aQIFeUFB2tSX-7AUiGHIBk',
        date: '07.15.24'
    },
    {
        title: 'State Diff and Account Abstraction',
        url: 'https://mirror.xyz/0x8958D0c419BCDFB8A86b8c0089552bE015fbe364/K_w27ODCDzdbOqu-jBOYfILBA-nMEzo3naqgd_eBgHY',
        date: '07.01.24'
    },
    {
        title: "Dogan's Best Places for Work and Chill in Istanbul",
        url: 'https://mirror.xyz/0x8958D0c419BCDFB8A86b8c0089552bE015fbe364/wIb8qJtS7v9xYRkG21MzdVe0mXkb6O6SxpaCNr71jAo',
        date: '06.15.24'
    },
    {
        title: 'ZK webautN',
        url: 'https://mirror.xyz/0x8958D0c419BCDFB8A86b8c0089552bE015fbe364/IzmGOJM8y_02JofILk7n4yAbCnVx4D7Zt3TAxKl04_U',
        date: '06.01.24'
    },

    {
        title: 'Meet with Clave #1: What is Clave',
        url: 'https://blog.getclave.io/meet-clave-1',
        date: '05.01.24'
    },
    {
        title: 'Meet with Clave #2: Passkey Signer',
        url: 'https://blog.getclave.io/meet-with-clave-hardware-signer',
        date: '04.15.24'
    },
    {
        title: 'Meet with Clave #3: Recovery for Everyone',
        url: 'https://blog.getclave.io/recovery-for-everyone-cloud-and-guardians',
        date: '04.01.24'
    },
    {
        title: 'What is Secure Enclave, Passkeys, Webauthn - A General Review',
        url: 'https://blog.getclave.io/what-is-secure-enclave-passkeys-webauthn',
        date: '03.15.24'
    },
    {
        title: 'A Beginner Guide For ZK Stack',
        url: 'https://blog.getclave.io/a-beginner-guide-for-zk-stack',
        date: '03.01.24'
    },
    {
        title: 'Universal Recovery: A Social Recovery Solution Utilizes ZK-Email',
        url: 'https://blog.getclave.io/universal-recovery-a-social-recovery',
        date: '02.15.24'
    },
    {
        title: 'Levels of Custody',
        url: 'https://blog.getclave.io/levels-of-custody',
        date: '02.01.24'
    },
    {
        title: 'Introducing Onchain Clave Usernames with ENS',
        url: 'https://blog.getclave.io/introducing-onchain-clave-usernames-with-ens',
        date: '01.15.24'
    },
    {
        title: 'How Did Clave Become the Earn Hub?',
        url: 'https://blog.getclave.io/how-did-clave-became-the-earn-hub',
        date: '01.01.24'
    },
    {
        title: 'What is RIP-7212? Precompile for secp256r1 Curve Support - Alchemy Blog',
        url: 'https://www.alchemy.com/blog/what-is-rip-7212',
        date: '12.15.23'
    },
    {
        title: 'Optimistic Bridges - Lytera',
        url: 'https://lytera.io/en/report/optimistic-bridges/',
        date: '12.01.23'
    },
    {
        title: 'Fuel Report - Lytera',
        url: 'https://lytera.io/en/report/fuel-report-en/',
        date: '11.15.23'
    },
    {
        title: 'Layer 2 Token Models: Cases of Optimism, dYdX, and Metis - Lytera',
        url: 'https://lytera.io/en/report/layer-2-token-models-optimisim-dydx-metis/',
        date: '11.01.23'
    },
    {
        title: 'EIP-7212: Precompiled for secp256r1 Curve Support',
        url: 'https://ethereum-magicians.org/t/eip-7212-precompiled-for-secp256r1-curve-support/14789',
        date: '10.15.23'
    }
];

function formatDate(dateStr) {
    // Optionally format the date if needed
    return dateStr;
}

function createBlogEntry(post) {
    return `
        <article class="blog-entry">
            <a href="${post.url}" target="_blank">
                <div class="blog-date">${formatDate(post.date)}</div>
                <h2 class="blog-title">${post.title}</h2>
            </a>
        </article>
    `;
}

function renderBlogPosts() {
    const blogContainer = document.querySelector('.blog-entries');
    const sortedPosts = [...blogPosts].sort((a, b) => {
        // Sort by date in reverse chronological order
        const dateA = new Date(a.date.split('.').reverse().join('-'));
        const dateB = new Date(b.date.split('.').reverse().join('-'));
        return dateB - dateA;
    });
    blogContainer.innerHTML = sortedPosts.map(post => createBlogEntry(post)).join('');
}

// Initialize the blog posts when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderBlogPosts);

// Optional: Add search functionality
const searchPosts = (query) => {
    const filtered = blogPosts.filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase())
    );
    const blogContainer = document.querySelector('.blog-entries');
    blogContainer.innerHTML = filtered.map(post => createBlogEntry(post)).join('');
};

// Optional: Add event listener for search input
if (document.getElementById('searchInput')) {
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchPosts(e.target.value);
    });
}