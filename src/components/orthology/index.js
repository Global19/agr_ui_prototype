import OrthologyTable from './orthologyTable';

const mockOrthologData = [
  {
    species: 'Homo sapiens',
    geneSymbol: 'GAK',
    geneURL: '/gene/HGNC:4113',
    ncbiID: '2580',
    scoreNumerator: 11,
    scoreDemominator: 11,
    methods: [
      {id: 'compara', isCalled: true},
      {id: 'homologene', isCalled: true},
      {id: 'inparanoid', isCalled: true},
      {id: 'isobase', isCalled: true},
      {id: 'oma', isCalled: true},
      {id: 'orthodb', isCalled: true},
      {id: 'orthomcl', isCalled: true},
      {id: 'panther', isCalled: true},
      {id: 'phylome', isCalled: true},
      {id: 'roundup', isCalled: true},
      {id: 'treefam', isCalled: true},
    ],
    isBestScore: true,
    isBestScoreReverse: true,
    alignURL: null,
  },
  {
    species: 'Homo sapiens',
    geneSymbol: 'DNAJC6',
    geneURL: '/gene/HGNC:4113',
    ncbiID: '9829',
    scoreNumerator: 7,
    scoreDemominator: 11,
    methods: [
      {id: 'compara', isCalled: true},
      {id: 'homologene', isCalled: false},
      {id: 'inparanoid', isCalled: true},
      {id: 'isobase', isCalled: false},
      {id: 'oma', isCalled: false},
      {id: 'orthodb', isCalled: true},
      {id: 'orthomcl', isCalled: true},
      {id: 'panther', isCalled: true},
      {id: 'phylome', isCalled: true},
      {id: 'roundup', isCalled: false},
      {id: 'treefam', isCalled: true},
    ],
    isBestScore: false,
    isBestScoreReverse: true,
    alignURL: null,
  },
  {
    species: 'Mus musculus',
    geneSymbol: 'Gak',
    geneURL: '/gene/MGI:2442153',
    ncbiID: '231580',
    scoreNumerator: 11,
    scoreDemominator: 11,
    methods: [
      {id: 'compara', isCalled: true},
      {id: 'homologene', isCalled: true},
      {id: 'inparanoid', isCalled: true},
      {id: 'isobase', isCalled: true},
      {id: 'oma', isCalled: true},
      {id: 'orthodb', isCalled: true},
      {id: 'orthomcl', isCalled: true},
      {id: 'panther', isCalled: true},
      {id: 'phylome', isCalled: true},
      {id: 'roundup', isCalled: true},
      {id: 'treefam', isCalled: true},
      {id: 'zfin', isCalled: true},
    ],
    isBestScore: true,
    isBestScoreReverse: true,
    alignURL: null,
  },
  {
    species: 'Rattus norvegicus',
    geneSymbol: 'Gak',
    geneURL: '/gene/621589',
    ncbiID: '231580',
    scoreNumerator: 8,
    scoreDemominator: 8,
    methods: [
      {id: 'compara', isCalled: true},
      {id: 'homologene', isCalled: true},
      {id: 'inparanoid', isCalled: true},
      {id: 'oma', isCalled: true},
      {id: 'orthodb', isCalled: true},
      {id: 'orthomcl', isCalled: true},
      {id: 'panther', isCalled: true},
      {id: 'treefam', isCalled: true},
    ],
    isBestScore: true,
    isBestScoreReverse: true,
    alignURL: null,
  },
  {
    species: 'Mus musculus',
    geneSymbol: 'Dnajc6',
    geneURL: '/gene/MGI:1919935',
    ncbiID: '72685',
    scoreNumerator: 7,
    scoreDemominator: 11,
    methods: [
      {id: 'compara', isCalled: true},
      {id: 'homologene', isCalled: false},
      {id: 'inparanoid', isCalled: true},
      {id: 'isobase', isCalled: false},
      {id: 'oma', isCalled: false},
      {id: 'orthodb', isCalled: true},
      {id: 'orthomcl', isCalled: true},
      {id: 'panther', isCalled: true},
      {id: 'phylome', isCalled: true},
      {id: 'roundup', isCalled: false},
      {id: 'treefam', isCalled: true},
      {id: 'zfin', isCalled: true},
    ],
    isBestScore: false,
    isBestScoreReverse: true,
    alignURL: null,
  },
  {
    species: 'Danio rerio',
    geneSymbol: 'Gak',
    geneURL: '/gene/ZDB-GENE-041210-358',
    ncbiID: '100151158',
    scoreNumerator: 7,
    scoreDemominator: 11,
    methods: [
      {id: 'compara', isCalled: true},
      {id: 'homologene', isCalled: true},
      {id: 'inparanoid', isCalled: false},
      {id: 'oma', isCalled: true},
      {id: 'orthodb', isCalled: true},
      {id: 'orthomcl', isCalled: true},
      {id: 'panther', isCalled: true},
      {id: 'phylome', isCalled: false},
      {id: 'roundup', isCalled: false},
      {id: 'treefam', isCalled: true},
      {id: 'zfin', isCalled: true},
    ],
    isBestScore: true,
    isBestScoreReverse: true,
    alignURL: null,
  },
  {
    species: 'Danio rerio',
    geneSymbol: 'Dnajc6',
    geneURL: '/gene/ZDB-GENE-080104-2',
    ncbiID: '796354',
    scoreNumerator: 5,
    scoreDemominator: 11,
    methods: [
      {id: 'compara', isCalled: true},
      {id: 'homologene', isCalled: false},
      {id: 'inparanoid', isCalled: true},
      {id: 'oma', isCalled: false},
      {id: 'orthodb', isCalled: true},
      {id: 'orthomcl', isCalled: true},
      {id: 'panther', isCalled: true},
      {id: 'phylome', isCalled: false},
      {id: 'roundup', isCalled: false},
      {id: 'treefam', isCalled: false},
      {id: 'zfin', isCalled: false},
    ],
    isBestScore: false,
    isBestScoreReverse: true,
    alignURL: null,
  },
  {
    species: 'Caenorhabditis elegans',
    geneSymbol: 'tag-257',
    geneURL: '/gene/WBGene00018516',
    ncbiID: '180844',
    scoreNumerator: 5,
    scoreDemominator: 11,
    methods: [
      {id: 'compara', isCalled: false},
      {id: 'homologene', isCalled: false},
      {id: 'inparanoid', isCalled: false},
      {id: 'isobase', isCalled: true},
      {id: 'oma', isCalled: false},
      {id: 'orthodb', isCalled: true},
      {id: 'orthomcl', isCalled: true},
      {id: 'panther', isCalled: false},
      {id: 'phylome', isCalled: true},
      {id: 'roundup', isCalled: false},
      {id: 'treefam', isCalled: true},
    ],
    isBestScore: true,
    isBestScoreReverse: true,
    alignURL: null,
  },
  {
    species: 'Caenorhabditis elegans',
    geneSymbol: 'dnj-25',
    geneURL: '/gene/WBGene00001043',
    ncbiID: '180844',
    scoreNumerator: 5,
    scoreDemominator: 11,
    methods: [
      {id: 'compara', isCalled: false},
      {id: 'homologene', isCalled: false},
      {id: 'inparanoid', isCalled: false},
      {id: 'isobase', isCalled: false},
      {id: 'oma', isCalled: false},
      {id: 'orthodb', isCalled: false},
      {id: 'orthomcl', isCalled: false},
      {id: 'panther', isCalled: true},
      {id: 'phylome', isCalled: true},
      {id: 'roundup', isCalled: false},
      {id: 'treefam', isCalled: false},
    ],
    isBestScore: false,
    isBestScoreReverse: true,
    alignURL: null,
  },
  {
    species: 'Saccharomyces cerevisiae',
    geneSymbol: 'SWA2',
    geneURL: '/gene/S000002728',
    ncbiID: '851918',
    scoreNumerator: 2,
    scoreDemominator: 11,
    methods: [
      {id: 'compara', isCalled: false},
      {id: 'homologene', isCalled: false},
      {id: 'inparanoid', isCalled: false},
      {id: 'isobase', isCalled: false},
      {id: 'oma', isCalled: false},
      {id: 'orthomcl', isCalled: false},
      {id: 'panther', isCalled: true},
      {id: 'phylome', isCalled: true},
      {id: 'roundup', isCalled: false},
      {id: 'treefam', isCalled: false},
    ],
    isBestScore: true,
    isBestScoreReverse: true,
    alignURL: null,
  }
];

export {
  OrthologyTable,
  mockOrthologData
};
