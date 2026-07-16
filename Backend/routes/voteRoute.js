import express from "express";
const router=express.Router();
import jwtAuthMiddleware from "./../middleware/auth.middleware.js";
import authorizedRole from "./../middleware/rbac.middleware.js";
import { voteStatus, castevote, winner, voteevents, checkVote, voteResult } from "./../controller/vote.contoller.js";
import { voteSubmitlimiter } from "./../middleware/rateLimiter.js";


//---------------------voting------------------------------------------
// router.post('/castvote/:candidateId', jwtAuthMiddleware,voteSubmitlimiter,castevote )

// //-----------------voteStatus---------------
router.get('/myvotes',jwtAuthMiddleware,voteStatus);

//-------------------voting Events---------------
router.get('/voteevents',jwtAuthMiddleware,voteevents);

//-------------voteCheck---------------------
router.get('/checkvote',jwtAuthMiddleware,checkVote)

//-----------------castingVote-------------------
router.post('/casteVote',jwtAuthMiddleware,voteSubmitlimiter,castevote)

//----------viewResult-------------
router.get('/viewResult',jwtAuthMiddleware,voteResult)

router.get('/winner',jwtAuthMiddleware,winner)

// //--------admin set the voting event-----
// router.post('/admin/event',jwtAuthMiddleware,authorizedRole("admin"),eventCreate)



export default router;


