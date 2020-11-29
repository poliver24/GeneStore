class GeneService {
    constructor() {
        this.genes = [
            {id: 1, name:'TP53', sequence:'AAFG'},
            {id: 2, name:'TNF', sequence:'CCGG'},
            {id: 3, name:'GKE', sequence:'AKFF'}
        ];
    }
    async retrieveGenes() {
        return Promise.resolve(this.genes);
    }
    async getGene(geneId) {
        for(var i = 0; i < this.genes.length; i++ ) {
            if (this.genes[i].id === geneId) {
                return Promise.resolve(this.genes[i]);
            }
        }
        return null;
    }
    async createGene(gene) {
        console.log("GeneService.createGene():");
        console.log(gene);
        return Promise.resolve(gene);
    }
    async deleteGene(geneId) {
        console.log("GeneService.deleteGene():");
        console.log("gene ID:" + geneId);
    }
    async updateGene(gene) {
        console.log("GeneService.updateGene():")
        console.log(gene);
    }
}

export default GeneService