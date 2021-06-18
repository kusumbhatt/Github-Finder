class Github {
    constructor() {
        this.client_id = 'c4a0942e2d5955b351ca';
        this.client_secret = '7f1d6a5b3faad6a864193c7429824a955c1434b1';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {profile, repos};
    }
}