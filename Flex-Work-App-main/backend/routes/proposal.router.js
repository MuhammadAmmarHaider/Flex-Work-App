const express = require('express');
const router = express.Router();
const {
  getProposals,
  getProposalById,
  createProposal,
  updateProposal,
  patchProposal,
} = require('../controllers/proposal.controller');

router.get('/', getProposals);           
router.get('/:id', getProposalById);     
router.post('/', createProposal);        
router.put('/:id', updateProposal);     
router.patch('/:id', patchProposal);

module.exports = router;
