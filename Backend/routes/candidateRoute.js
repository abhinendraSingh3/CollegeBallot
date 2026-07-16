import express from "express";
const router = express.Router();
import jwtAuthMiddleware from "./../middleware/auth.middleware.js";

import { voteCount, candidateView } from "./../controller/candidate.controller.js";
import { createCandidtaLimiter } from "./../middleware/rateLimiter.js";


//add new candidat
// router.post('/', jwtAuthMiddleware,createCandidtaLimiter,authorizedRole("admin"),addCandidate);

//-----------------------------upadate candidate---------------------------------
// router.put('/:candidateId',jwtAuthMiddleware,authorizedRole("admin"),updateCandidate)


// //-------------delete candidate------------------------
// router.delete('/:candidateid', jwtAuthMiddleware,authorizedRole("admin"),deleteCandidate )


// //------------voteCount-------------
// router.get('/votecount', jwtAuthMiddleware,voteCount);

//show candidates according to 
router.get('/allcandidates/:electionId',jwtAuthMiddleware,candidateView);


export default router;